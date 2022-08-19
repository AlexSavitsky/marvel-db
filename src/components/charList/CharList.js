import { Component } from "react";

import MarvelService from "../../services/MarvelService";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";

import "./charList.scss";

class CharList extends Component {
  state = {
    charList: [],
    error: false,
    loading: true,
    newItemLoading: false,
    offset: 220,
    charEnded: false,
  };

  marvelServise = new MarvelService();

  componentDidMount() {
    window.addEventListener("scroll", this.showNewCharactersByScrollEnd);
    this.onRequest();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.showNewCharactersByScrollEnd);
  }

  showNewCharactersByScrollEnd = () => {
    const { loading, error, newItemLoading, offset } = this.state;

    if (
      window.pageYOffset + document.documentElement.clientHeight >=
        document.documentElement.scrollHeight &&
      !loading &&
      !newItemLoading &&
      !error
    ) {
      this.onRequest(offset);
    }
  };

  onRequest = (offset) => {
    this.onCharListLoading();
    this.marvelServise
      .getAllCharacters(offset)
      .then(this.onCharListLoaded)
      .catch(this.onError);
  };

  onCharListLoading = () => {
    this.setState({ newItemLoading: true });
  };

  onError = () => {
    this.setState({ error: true, loading: false });
  };

  onCharListLoaded = (newCharList) => {
    let ended = false;
    if (newCharList.length < 9) {
      ended = true;
    }

    this.setState(({ offset, charList }) => ({
      charList: [...charList, ...newCharList],
      loading: false,
      newItemLoading: false,
      offset: offset + 9,
      charEnded: ended,
    }));
  };

  itemRefs = [];

  setRef = (ref) => {
    this.itemRefs.push(ref);
  };

  focusOnItem = (id) => {
    this.itemRefs.forEach((item) =>
      item.classList.remove("char__item_selected")
    );
    this.itemRefs[id].classList.add("char__item_selected");
    this.itemRefs[id].focus();
  };

  renderItems(arr) {
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
          ref={this.setRef}
          onClick={() => {
            this.props.onCharSelected(item.id);
            this.focusOnItem(i);
          }}
          onKeyPress={(e) => {
            if(e.key === '' || e.key === 'Enter'){
              this.props.onCharSelected(item.id);
              this.focusOnItem(i);
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

  render() {
    const { charList, loading, error, newItemLoading, offset, charEnded } =
      this.state;

    const items = this.renderItems(charList);

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
          onClick={() => this.onRequest(offset)}
        >
          <div className="inner">load more</div>
        </button>
      </div>
    );
  }
}

export default CharList;
