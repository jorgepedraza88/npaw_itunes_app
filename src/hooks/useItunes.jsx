import { useContext } from "react";
import ItunesContext from "../context/ItunesProvider";

const useItunes = () => {
  return useContext(ItunesContext);
};

export default useItunes;
