import React, { useState, useEffect} from 'react';
import Pictures from './data/picture'

import { TransitionHook } from './hooks';
export default () => {
    const [delay, setDelay] = useState(3000);
    const [increment, setIncrement] = useState(1);

    const index = TransitionHook({
        delay, increment, length: Pictures.length
    })
    const updateDelay = ({ target }) => {
        setDelay(Number(target.value) * 1000)
    }
return (
<div className="Gallery" >
    <img src={Pictures[index].image} alt="" />
    <div className="multiform">

        <div>
            Gallery trasition(s): <input type="number" onChange={updateDelay} />
        </div>
    </div>
</div>
)
}