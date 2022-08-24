import { useState, useEffect } from "react";

import useMarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

import "./comicsList.scss";

const ComicsList = () => {
  const { loading, error, getAllComics } = useMarvelService();
  const [comicsList, setComicsList] = useState([]);
  const [newItemLoading, setNewItemLoading] = useState(false);
  const [comicsEnded, setComicsEnded] = useState(false);
  const [offset, setOffset] = useState(1);

  useEffect(() => {
    onRequest(offset, true);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", showNewComicsByScrollEnd);

    return () => {
      window.removeEventListener("scroll", showNewComicsByScrollEnd);
    };
  });

  const showNewComicsByScrollEnd = () => {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
        document.documentElement.scrollHeight &&
      !loading &&
      !error &&
      !newItemLoading
    ) {
      onRequest(offset);
    }
  };

  const onRequest = (offset, initial) => {
    initial ? setNewItemLoading(false) : setNewItemLoading(true);
    getAllComics(offset).then(onComicsListLoaded);
  };

  const onComicsListLoaded = (newComicsList) => {
    let ended = false;
    if (newComicsList.length < 8) {
      ended = true;
    }

    setComicsList((comicsList) => [...comicsList, ...newComicsList]);
    setNewItemLoading(false);
    setOffset((offset) => offset + 8);
    setComicsEnded(ended);
  };

  function renderItems(arr) {
    const items = arr.map((item, i) => {
      let imgStyle =
        item.thumbnail.indexOf("not_available") > -1 ||
        item.thumbnail.indexOf("4c002e0305708.gif") > -1
          ? { objectFit: "unset" }
          : { objectFit: "cover" };

      return (
        <li className="comics__item" key={i}>
          <a href="#">
            <img
              src={item.thumbnail}
              alt={item.name}
              className="comics__item-img"
              style={imgStyle}
            />
            <div className="comics__item-name">{item.name}</div>
            <div className="comics__item-price">{item.price}</div>
          </a>
        </li>
      );
    });

    return <ul className="comics__grid">{items}</ul>;
  }

  const items = renderItems(comicsList);

  const errorMessage = error ? (
    <li className="comics__item" style={{ width: 100 + "%" }}>
      {<ErrorMessage />}
    </li>
  ) : null;
  const spinner = loading && !newItemLoading ? <Spinner /> : null;

  return (
    <div className="comics__list">
      <ul className="comics__grid">
        {spinner}
        {errorMessage}
        {items}
      </ul>
      <button
        className="button button__main button__long"
        disabled={newItemLoading}
        style={{ display: comicsEnded ? "none" : "block" }}
        onClick={() => onRequest(offset)}
      >
        <div className="inner">load more</div>
      </button>
    </div>
  );
};

export default ComicsList;
