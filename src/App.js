import React, { Component } from "react";
import Home from "./container/Home";
import "./App.css";
import { ApolloProvider } from "react-apollo";
import client from "./config/apolloClient";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ApolloProvider client={client}>
          <Home />
        </ApolloProvider>
      </div>
    );
  }
}

export default App;
