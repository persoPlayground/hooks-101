import React, { useState, useEffect} from 'react';
import Matrixs from './data/matrix'

export default () => {
    const [index, setIndex] =useState(0);
    const [delay, setDelay] = useState(100);
    const [increment, setIncrement] = useState(1);

    useEffect(() => {
       const interval = setInterval(() => {
            setIndex(previousState => (previousState + increment) % Matrixs.length); 
        }, delay);
            //cleanup function
   return () => {
    clearInterval(interval);
        }
    }
    ,[delay])
    const updateDelay = ({ target }) => {
        setDelay(Number(target.value) * 100)
    }
return (
<div className="matrix" >
    <img src={Matrixs[index]} alt="" />
    <div className="multiform">

        <div>
            Matrix trasition(s): <input type="number" onChange={updateDelay} />
        </div>
    </div>
</div>
)
}