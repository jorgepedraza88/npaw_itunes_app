import { createContext, useState, useEffect, useCallback } from "react";

const ItunesContext = createContext();

const ItunesProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [albums, setAlbums] = useState([]);
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(0);

  // Function to change the page number from the API
  const changeOffset = () => {
    if (page > 1) {
      setOffset(page * 20 - 20);
    } else {
      setOffset(0);
    }
  };

  const searchAlbum = useCallback(async () => {
    const url = `https://itunes.apple.com/search?term=${search}&limit=20&offset=${offset}&entity=album`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setAlbums(data.results);
    } catch (error) {
      console.log(error);
    }
  }, [search, offset]);

  useEffect(() => {
    changeOffset();
    searchAlbum();
  }, [changeOffset, searchAlbum]);

  return (
    <ItunesContext.Provider
      value={{
        search,
        setSearch,
        searchAlbum,
        albums,
        page,
        setPage,
        changeOffset,
      }}
    >
      {children}
    </ItunesContext.Provider>
  );
};

export { ItunesProvider };

export default ItunesContext;
