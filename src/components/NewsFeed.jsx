
import useFetch from "./hooks/useCripotolist";

import NewsCard from "./NewsCard";
import { STATUS_UPDATES } from "../constants";

export default function NewsFeed() {
  const newsList = useFetch(STATUS_UPDATES)

  // You can turn this into a custom hook////////////////////
 
  ///////////////////////////////////////////////////////////

  return (
    <ul className="newsfeed">
      {console.log('news are', newsList)}
      {newsList[0].map((newsItem) => (
        <li>
          <NewsCard newsItem={newsItem} />
        </li>
      ))}
    </ul>
  );
}
