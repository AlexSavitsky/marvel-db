import useHttp from "../hooks/http.hook";

const useMarvelService = () => {
  const { loading, request, error, clearError, process, setProcess } = useHttp();

  const _apiBase = "https://gateway.marvel.com:443/v1/public/";
  const _apiKey = "apikey=e1cacf97d0c71a777e3cb47285f8bcfb";
  const _baseOffset = 210;

  //characters
  const getAllCharacters = async (offset = _baseOffset) => {
    const res = await request(
      `${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`
    );

    return res.data.results.map(_transformCharacter);
  };

  const getCharacter = async (id) => {
    const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);

    return _transformCharacter(res.data.results[0]);
  };

  const getCharacterByName = async (name) => {
    const res = await request(`${_apiBase}characters?name=${name}&${_apiKey}`);

    return res.data.results.length > 0 ? [_transformCharacter(res.data.results[0])] : [];
  };

  const _transformCharacter = (char) => {
    return {
      id: char.id,
      name: char.name,
      description:
        char.description === ""
          ? "Unfortunately, information about this character was destroyed by Thanos..."
          : char.description.length > 220
          ? char.description.slice(0, 220) + "..."
          : char.description,
      thumbnail: char.thumbnail.path + "." + char.thumbnail.extension,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
      comics: char.comics.items,
    };
  };

  //Comics
  const getAllComics = async (offset = 1) => {
    const res = await request(
      `${_apiBase}comics?issueNumber=1&limit=8&offset=${offset}&${_apiKey}`
    );

    return res.data.results.map(_transformComics);
  };

  const getComic = async (id) => {
    const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);

    return _transformComics(res.data.results[0]);
  };

  const _transformComics = (comic) => {
    return {
      id: comic.id,
      name: comic.title,
      description: comic.description || "There is no description.",
      pageCount: comic.pageCount
        ? `${comic.pageCount} pages`
        : "No information about the number of pages.",
      language: comic.textObjects.language || "en-us",
      price: comic.prices[0].price
        ? `$${comic.prices[0].price}`
        : "Not available",
      thumbnail: comic.thumbnail.path + "." + comic.thumbnail.extension,
    };
  };

  return {
    loading,
    error,
    process,
    getAllCharacters,
    getCharacter,
    getCharacterByName,
    clearError,
    getAllComics,
    getComic,
    setProcess
  };
};

export default useMarvelService;
