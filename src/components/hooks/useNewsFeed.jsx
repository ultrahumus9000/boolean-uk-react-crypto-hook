
import { useEffect, useState } from "react";

export default function useNewsFeed(){
    const [newsList, setNewsList] = useState([]);
    // You can turn this into a custom hook////////////////////
    useEffect(
      () =>
        fetch(STATUS_UPDATES)
          .then((resp) => resp.json())
          .then(({ status_updates }) => {
              console.log({ status_updates })
              console.log(status_updates)
              setNewsList(status_updates)}),
      [setNewsList]
    );

    return newsList
}