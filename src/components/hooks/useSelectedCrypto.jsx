import {  useState } from "react";


export default function useSelectedCrypto(){
    const [selectedCrypto, setSelectedCripto] = useState(null);
    function selectCrypto(selecttheedId) {
        setSelectedCripto(selecttheedId);
      }
     
  function isSelectedCrypto(id) {
    return selectedCrypto === id;
  }
  return [selectedCrypto,selectCrypto,isSelectedCrypto] 
}