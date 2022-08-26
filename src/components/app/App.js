import { BrowserRouter as Router, Route, Routes, NoMatch } from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";
import { MainPage, ComicsPage, Page404, SingleComicPage} from "../pages";

const App = () => {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main>
          <Routes>
            <Route path="/marvel-db" element={<MainPage />} />
            <Route path="/marvel-db/comics" element={<ComicsPage />} />
            <Route path="/marvel-db/comics/:comicId" element={<SingleComicPage />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
