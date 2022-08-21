import {useState, useEffect, useRef } from "react";

import MarvelService from "../../services/MarvelService";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";

import "./charList.scss";

const CharList = (props) => {

  const [charList, setCharList]  = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [newItemLoading, setNewItemLoading] = useState(false);
  const [offset, setOffset] = useState(220);
  const [charEnded, setCharEnded] = useState(false);

  const marvelServise = new MarvelService();

  useEffect(() => {
    onRequest();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", showNewCharactersByScrollEnd);

    return () => {
      window.removeEventListener("scroll",showNewCharactersByScrollEnd);
    };
  });


  const showNewCharactersByScrollEnd = () => {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
        document.documentElement.scrollHeight && !loading && !error && !newItemLoading
    ) {
      onRequest(offset);
    }
  };

  const onRequest = (offset) => {
    onCharListLoading();
    marvelServise
      .getAllCharacters(offset)
      .then(onCharListLoaded)
      .catch(onError);
  };

  const onCharListLoading = () => {
    setNewItemLoading(true);
  };

  const onError = () => {
    setError(true);
    setLoading(false);
  };

  const onCharListLoaded = (newCharList) => {
    let ended = false;
    if (newCharList.length < 9) {
      ended = true;
    }

    setCharList(charList => [...charList, ...newCharList]);
    setLoading(false);
    setNewItemLoading(false);
    setOffset(offset => offset + 9);
    setCharEnded(ended);
  };

  const itemRefs = useRef([]);

  const focusOnItem = (id) => {
    itemRefs.current.forEach((item) =>
      item.classList.remove("char__item_selected")
    );
    itemRefs.current[id].classList.add("char__item_selected");
    itemRefs.current[id].focus();
  };

  function renderItems(arr) {
    const items = arr.map((item, i) => {
      let imgStyle =
        item.thumbnail.indexOf("not_available") > -1 ||
        item.thumbnail.indexOf("4c002e0305708.gif") > -1
          ? { objectFit: "unset" }
          : { objectFit: "cover" };

      return (
        <li
          className="char__item"
          key={item.id}
          ref={el => itemRefs.current[i] = el}
          onClick={() => {
            props.onCharSelected(item.id);
            focusOnItem(i);
          }}
          onKeyPress={(e) => {
            if(e.key === '' || e.key === 'Enter'){
              props.onCharSelected(item.id);
              focusOnItem(i);
            }
          }}
        >
          <img src={item.thumbnail} alt={item.name} style={imgStyle} />
          <div className="char__name">{item.name}</div>
        </li>
      );
    });

    return <ul className="char__grid">{items}</ul>;
  }

    const items = renderItems(charList);

    const errorMessage = error ? (
      <li className="char__item" style={{ width: 100 + "%" }}>
        {<ErrorMessage />}
      </li>
    ) : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error) ? items : null;

    return (
      <div className="char__list">
        <ul className="char__grid">
          {errorMessage}
          {spinner}
          {content}
        </ul>
        <button
          className="button button__main button__long"
          disabled={newItemLoading}
          style={{ display: charEnded ? "none" : "block" }}
          onClick={() => onRequest(offset)}
        >
          <div className="inner">load more</div>
        </button>
      </div>
    );
}

export default CharList;
