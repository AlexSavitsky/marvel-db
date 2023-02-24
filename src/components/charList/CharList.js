import { useState, useEffect, useRef, useMemo, useCallback } from "react";

import useMarvelService from "../../services/MarvelService";
import setContentToList from "../../utils/setContentToList";
import useScroll from "../../hooks/useScroll";

import "./charList.scss";

const CharList = (props) => {
  const [charList, setCharList] = useState([]);
  const [newItemLoading, setNewItemLoading] = useState(false);
  const [offset, setOffset] = useState(220);
  const [charEnded, setCharEnded] = useState(false);
  const [focus, setFocus] = useState(null);

  const { getAllCharacters, process, setProcess } = useMarvelService();
  const { scrollToItem } = useScroll();

  useEffect(() => {
    onRequest(offset, true);
  }, []);

  useEffect(() => {
    if (charList.length > 1) {
      window.addEventListener("scroll", showNewCharactersByScrollEnd);
    }
    return () => {
      window.removeEventListener("scroll", showNewCharactersByScrollEnd);
    };
  }, [offset]);

  const showNewCharactersByScrollEnd = () => {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
        document.documentElement.scrollHeight &&
      process === "confirmed"
    ) {
      onRequest(offset);
    }
  };

  const onRequest = (offset, initial) => {
    initial ? setNewItemLoading(false) : setNewItemLoading(true);
    getAllCharacters(offset)
      .then(onCharListLoaded)
      .then(() => setProcess("confirmed"));
  };

  const onCharListLoaded = (newCharList) => {
    let ended = false;
    if (newCharList.length < 9) {
      ended = true;
    }

    setCharList((charList) => [...charList, ...newCharList]);
    setNewItemLoading((newItemLoading) => false);
    setOffset((offset) => offset + 9);
    setCharEnded((charEnded) => ended);
  };

  const itemRefs = useRef([]);

  const focusOnItem = (id) => {
    itemRefs.current.forEach((item) => {
      item.classList.remove("char__item_selected");
    });
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
          tabIndex={0}
          key={item.id}
          ref={(el) => (itemRefs.current[i] = el)}
          onClick={() => {
            props.onCharSelected(item.id);
            scrollToItem();
            focusOnItem(i);
          }}
          onKeyPress={(e) => {
            if (e.key === "" || e.key === "Enter") {
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

  const elements = useMemo(() => {
    return setContentToList(
      process,
      () => renderItems(charList),
      newItemLoading
    );
  }, [process]);

  return (
    <div className="char__list">
      <ul className="char__grid">{elements}</ul>
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
};

export default CharList;
