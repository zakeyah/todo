// 'use strict';

import React,{ useState } from "react";

export const TodoContext=React.createContext();

function SettingsProvider (props){
    const [list, setList] = useState([]);
    const [disable, setDisable] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [todoPerPage] = useState(3);
    const [sort, setSort] = useState(false);
    const state = {
        disable,
		setDisable,
        setSort,
        sort,
        list,
        setList,
        currentPage,
        setCurrentPage,
        todoPerPage
    }
    return <TodoContext.Provider value={state}>{props.children}</TodoContext.Provider>

}

export default SettingsProvider;