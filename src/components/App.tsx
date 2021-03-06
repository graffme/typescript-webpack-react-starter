import * as React from "react";
import './App.scss';

export interface AppProps { 
    place: string,
}

export const App = (props: AppProps) => (
  <h1 className="colorText">Greetings from the {props.place}!</h1>
);