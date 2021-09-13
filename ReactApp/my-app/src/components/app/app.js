import React from "react";
import AppHeader from "../app-header/app-header";
import Searchpanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";

// import './app.css';
import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`

const App = () => {
    
    const data = [
        {label: 'Hello', important: true, id: 'one'},
        {label: 'Добренький денек!', important: false, id: 'two'},
        {label: 'Guten Abend', important: false, id: 'three'}
    ];

    return (
        <AppBlock>
            <AppHeader/>

            <div className="search-panel d-flex">
                <Searchpanel/>
                <PostStatusFilter/>
            </div> 
            <PostList posts={data}/>
            <PostAddForm/>
        </AppBlock>
    )
}

export default App;