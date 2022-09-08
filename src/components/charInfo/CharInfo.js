import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import useMarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Skeleton from "../skeleton/Skeleton";

import "./charInfo.scss";

const CharInfo = (props) => {
  const { loading, error, getCharacter, clearError } = useMarvelService();

  const [char, setChar] = useState(null);

  useEffect(() => {
    updateChar();
    // eslint-disable-next-line
  }, [props.charId]);

  const updateChar = () => {
    const { charId } = props;
    if (!charId) {
      return;
    }

    clearError();
    getCharacter(charId).then(onCharLoaded);
  };

  const onCharLoaded = (char) => {
    setChar(char);
    window.scrollTo({ top: 400, behavior: "smooth" });
  };

  const skeleton = char || loading || error ? null : <Skeleton />;
  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error || !char) ? <View char={char} /> : null;
  const errorStyle = error ? { padding: 5 + "px", height: 200 + "px" } : null;

  return (
    <div className="char__info" style={errorStyle}>
      {skeleton}
      {errorMessage}
      {spinner}
      {content}
    </div>
  );
};

const View = ({ char }) => {
  const { name, description, thumbnail, homepage, wiki, comics } = char;

  const imgStyle =
    thumbnail.indexOf("not_available") > -1
      ? { objectFit: "contain" }
      : { objectFit: "cover" };

  return (
    <>
      <div className="char__basics">
        <img src={thumbnail} alt={name} style={imgStyle} />
        <div>
          <div className="char__info-name">{name}</div>
          <div className="char__btns">
            <a href={homepage} className="button button__main">
              <div className="inner">homepage</div>
            </a>
            <a href={wiki} className="button button__secondary">
              <div className="inner">Wiki</div>
            </a>
          </div>
        </div>
      </div>
      <div className="char__descr">{description}</div>
      <div className="char__comics">Comics:</div>
      <ul className="char__comics-list">
        {comics.length > 0 ? null : "There is not comics with this character"}
        {comics.map((item, i) => {
          const comicId = item.resourceURI.split("comics/")[1];
      
          // eslint-disable-next-line
          if (i > 9) return;
          return (
            <Link to={`/marvel-db/comics/${comicId}`} className="char__comics-item">
              <li key={i} >
                {item.name}
              </li>
            </Link>
          );
        })}
      </ul>
    </>
  );
};

CharInfo.propTypes = {
  charId: PropTypes.number,
};

export default CharInfo;
