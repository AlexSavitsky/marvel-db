import { useState } from "react";
import PropTypes from "prop-types";

import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ComicsList from "../comicsList/ComicsList";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import AppBanner from "../appBanner/AppBanner";

import decoration from "../../resources/img/vision.png";

const App = () => {
  const [selectedChar, setSelectedChar] = useState(null);

  const onCharSelected = (id) => {
    setSelectedChar(id);
  };

  return (
    <div className="app">
      <AppHeader />
      <main>
        <ErrorBoundary>
          <RandomChar />
        </ErrorBoundary>

        <div className="char__content">
          <ErrorBoundary>
            <CharList onCharSelected={onCharSelected} />
          </ErrorBoundary>

          <ErrorBoundary>
            <CharInfo charId={selectedChar} />
          </ErrorBoundary>
        </div>
        <img className="bg-decoration" src={decoration} alt="vision" />
        {/* <ErrorBoundary>
          <AppBanner />
          <ComicsList />
        </ErrorBoundary> */}
      </main>
    </div>
  );
};

CharList.propTypes = {
  onCharSelected: PropTypes.func.isRequired,
};

export default App;
