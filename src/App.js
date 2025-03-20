import React, { Component } from 'react';
import './App.css';
import '@progress/kendo-theme-material/dist/material-lime-dark.css';
import { Button } from '@progress/kendo-react-buttons';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Hello KendoReact!
                </h1>
                <Button themeColor={'primary'}>
                  new btn
                </Button>
            </div>
        );
    }
}

export default App;