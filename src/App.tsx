import React from 'react';
import './App.css';
import {
    Avatar,
    Checkbox,
    Slider,
    Switch
} from "@fluentui/react-components";
import { Alert } from '@fluentui/react-components/unstable';

function App() {
  return (
    <div className="App">
        <Slider defaultValue={20} />

        <Switch label="This is a switch" />
        <Alert>This is a default alert</Alert>

        <Checkbox label="Checkbox" />
        <Avatar aria-label="Guest" />
    </div>
  );
}

export default App;
