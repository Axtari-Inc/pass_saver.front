import React from 'react';
import logo from './logo.svg';
import './App.css';
import AuthComponent from "./components/auth/auth.component";
import {PasswordArea} from "./components/passwordArea/passwordArea.component";

function App() {

    return (<>
            <header></header>

            <PasswordArea />
        </>
    );
}

export default App;
