import { useEffect, useState } from "react";

export default function useCurrentTime(currentTime){
    const [currTime, setCurrTime] = useState(currentTime());
    useEffect(() => {
        const timer = setInterval(() => {
          setCurrTime((current) => current + 1);
        }, 1000);
        return () => clearInterval(timer);
      }, [setCurrTime])

      return currTime

}