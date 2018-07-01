import React, { Component } from "react";
import Content from "../components/Content";
import Form from "../components/Form";
import Footer from "../components/Footer";
import TopHeader from "../components/TopHeader";

class Home extends Component {
  render() {
    return (
      <div>
        <TopHeader />
        <Content />
        <Form />
        <Footer />
      </div>
    );
  }
}

export default Home;
