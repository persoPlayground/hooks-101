import { useState, useEffect } from 'react';

export const useFetchCustomHook = (url, initialValue) => {
    const [result, setResult] = useState(initialValue);
    useEffect(() => {
      fetch(url)
        .then(resp => resp.json())
        .then(json => setResult(json))
        .catch(err => console.log(err))
    }, []);
    return result;
} 

export const TransitionHook = ({increment, delay, length}) => {
  const [index, setIndex] =useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
         setIndex(previousState => (previousState + increment) % length); 
     }, delay);
 return () => {
 clearInterval(interval);
     }
 }
 ,[delay]);

return index;
}
