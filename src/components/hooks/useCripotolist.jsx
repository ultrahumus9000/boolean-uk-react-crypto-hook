import { useEffect, useState } from "react";


 export default function useFetch(CRIPTO_LIST){
    const [cryptoList, setCryptoList] = useState([]);
    useEffect(() => {
        fetch(CRIPTO_LIST)
          .then((resp) => resp.json())
          .then((data)=>{ 
            data['status_updates']===undefined? setCryptoList(data): setCryptoList( data['status_updates'])
            });
      }, [setCryptoList,CRIPTO_LIST]);
      
    return [cryptoList,setCryptoList]
}

// function useNewsFeed(){
//     const [newsList, setNewsList] = useState([]);
//     // You can turn this into a custom hook////////////////////
//     useEffect(
//       () =>
//         fetch(STATUS_UPDATES)
//           .then((resp) => resp.json())
//           .then(({ status_updates }) => setNewsList(status_updates)),
//       [setNewsList]
//     );

//     return newsList
// }