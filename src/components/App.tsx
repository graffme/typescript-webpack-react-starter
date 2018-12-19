import * as React from "react";

export interface AppProps { 
    place: string,
}

export const App = (props: AppProps) => (
  <h1>Greetings from the {props.place}!</h1>
);