import React, {useState, useCallback} from 'react';
import axios from 'axios';
import logo from './logo.svg';
import NewsList from './components/NewsList';
import Categories from './components/Categories';
import './App.css';

const App = () => {
    const [category, setCategory] = useState('all');
    const onSelect = useCallback(category => setCategory(category), []);

    return (
        <>
            <Categories category={category} onSelect={onSelect}/>
            <NewsList category={category}/>
        </>
    );
};

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
