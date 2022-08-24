import useHttp from '../hooks/http.hook';

const useMarvelService = () => {
  const {loading, request, error, clearError} = useHttp();

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
    const res = await request(
      `${_apiBase}characters/${id}?${_apiKey}`
    );

    return _transformCharacter(res.data.results[0]);
  };

  const _transformCharacter = (char) => {
    let checkedDescr = char.description;
    if(checkedDescr === ''){
      checkedDescr = "Unfortunately, information about this character was destroyed by Thanos..." 
    }
    if (checkedDescr.length > 220){
      checkedDescr = checkedDescr.slice(0, 220) + '...';
    }

    return {
      id: char.id,
      name: char.name,
      description: checkedDescr,
      thumbnail: char.thumbnail.path + "." + char.thumbnail.extension,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
      comics: char.comics.items
    };
  };


  //Comics
  const getAllComics = async (offset = 1) => {
    const res = await request(
      `${_apiBase}comics?issueNumber=1&limit=8&offset=${offset}&${_apiKey}`
    );

    return res.data.results.map(_transformComics);
  }

  const getComic = async (id) => {
    const res = await request(
      `${_apiBase}comics/${id}?${_apiKey}`
    );

    return _transformComics(res.data.results[0]);
  }

  const _transformComics = (comic) => {
      let checkedPrice =  comic.prices[0].price;
      if(checkedPrice <=0){
        checkedPrice = 'Not available';
      }

      return {
        id: comic.id,
        name: comic.title,
        price: comic.prices[0].price,
        thumbnail: comic.thumbnail.path + "." + comic.thumbnail.extension
      }
  }

  return {loading, error, getAllCharacters, getCharacter, clearError, getAllComics, getComic}
}

export default useMarvelService;
