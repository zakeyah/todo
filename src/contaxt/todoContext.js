'use strict';

import React,{ useState } from "react";

export const TodoContext=React.createContext();

function SettingsProvider (props){
    const [disable, setDisable] = useState(false);
    const state = {
        disable,
		setDisable,
    }
    return <TodoContext.Provider value={state}>{props.children}</TodoContext.Provider>

}

export default SettingsProvider;