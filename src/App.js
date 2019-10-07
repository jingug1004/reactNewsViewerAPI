import React, {useState} from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

const App = () => {
    const [data, setData] = useState(null);
    /*
    const onClick = () => {
        axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response => {
            setData(response.data);
        });
    };
*/
    const onClick = async () => {
        try {
            const response = await axios.get(
                /*
                'https://jsonplaceholder.typicode.com/todos/1'
                */
                'https://newsapi.org/v2/top-headlines?country=kr&apiKey=e9fdf950860a45daa25430d1e3475df2'
            );
            setData(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div>
            <div>
                <button onClick={onClick}>불러오기</button>
            </div>
            {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true}></textarea>}
        </div>
    )
}

/*
* https://newsapi.org/
* https://newsapi.org/account
*
* e9fdf950860a45daa25430d1e3475df2
*
*
*
* */
export default App;
