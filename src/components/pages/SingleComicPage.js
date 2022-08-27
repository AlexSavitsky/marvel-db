import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import {Page404} from "./"
import useMarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";

import "./singleComicPage.scss";

const SingleComicPage = () => {
  const { loading, error, getComic, clearError } = useMarvelService();

  const { comicId } = useParams();

  const [comic, setComic] = useState(null);

  useEffect(() => {
    updateComic();
    // eslint-disable-next-line
  }, [comicId]);

  const updateComic = () => {
    clearError();
    getComic(comicId).then(onComicLoaded);
  };

  const onComicLoaded = (comic) => {
    setComic(comic);
  };

  const errorMessage = error ? <Page404 /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error || !comic) ? <View comic={comic} /> : null;
  return (
    <>
      {errorMessage}
      {spinner}
      {content}
    </>
  );
};

const View = ({ comic }) => {
  const { name, description, pageCount, thumbnail, language, price } = comic;

  return (
    <div className="single-comic">
      <img src={thumbnail} alt={name} className="single-comic__img" />
      <div className="single-comic__info">
        <h2 className="single-comic__name">{name}</h2>
        <p className="single-comic__descr">{description}</p>
        <p className="single-comic__descr">{pageCount}</p>
        <p className="single-comic__descr">{language}</p>
        <div className="single-comic__price">{price}</div>
      </div>
      <Link to="/marvel-db/comics" className="single-comic__back">
        Back to all
      </Link>
    </div>
  );
};

export default SingleComicPage;
