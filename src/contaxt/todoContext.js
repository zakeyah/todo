'use strict';
import { useState } from "react";

export const todoContext=React.createContext();

function SettingsProvider (props){
    const [disable, setDisable] = useState(false);
    const state = {
        disable,
		setDisable,
    }

}