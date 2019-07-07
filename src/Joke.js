import React from 'react'
import { useFetchCustomHook } from './hooks';
export default () => {
//     const [joke, setJoke ] = useState({});

//     useEffect(() => {
//         fetch('https://official-joke-api.appspot.com/jokes/random')
//         .then(resp => resp.json())
//         .then(json => setJoke(json))
//         .catch(err => console.log(err))
//     }, []);
// const { setup, punchline } = joke;
const { setup, punchline } = useFetchCustomHook('https://official-joke-api.appspot.com/jokes/random', {});
    return(
    <div>
        <h4>Joke</h4>
        <p>{setup}</p>
        <p><em>{punchline}</em></p>
    </div>
    );
}