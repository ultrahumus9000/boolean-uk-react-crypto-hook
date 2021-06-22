import { useEffect, useState } from "react";
import { getCriptoUpdateUrl } from "../../constants";

export default function useCounter(id, updateCryptoData){
    const [counter, setCounter] = useState(30);
    useEffect(() => {
        if (counter < 0) {
          fetch(getCriptoUpdateUrl(id))
            .then((resp) => resp.json())
            .then((data) => {
              updateCryptoData(
                {
                  current_price: data[id].gbp,
                  last_updated: data[id]["last_updated_at"]
                },
                id
              );
            });
          setCounter(30);
        }
      }, [id, counter, setCounter, updateCryptoData]);

      return [counter,setCounter]

}