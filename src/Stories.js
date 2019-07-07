import React  from 'react';
import { useFetchCustomHook } from './hooks';

export default () => {
    // const [stories, setJsetStories ] = useState([]);

    // useEffect(() => {
    //     fetch('https://news-proxy-server.appspot.com/topstories')
    //     .then(resp => resp.json())
    //     .then(json => setJsetStories(json))
    //     .catch(err => console.log(err))
    // }, []);

    const stories = useFetchCustomHook('https://news-proxy-server.appspot.com/topstories', []);
    return(
    <div className="stories">
        <h4>Stories</h4>
       {
           stories.map(s => {
        const { id, by, time, title, url } = s;
        return (
        <div key={id} >
            <a href={url}>{title}</a>
            <div>{by} - {new Date(time * 1000 ).toLocaleString()}</div>
        </div>
        )
           })
       }
    </div>
    );
}