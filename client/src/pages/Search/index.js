import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Container, Row, Col } from "../../components/Grid";

class Search extends Component {
  // create state
  state = {
    search: "",
    books: [],
    error: "",
    message: ""
  };

  render() {
    return (
      <Container fluid>
        <Jumbotron>
          <h1>Find Books Using the Google Books API!</h1>
        </Jumbotron>
        <Container>
          <Row>
            <Col size="12">
           
            </Col>
          </Row>
        </Container>
        <br></br>
        <Container>
       
        </Container>
      </Container>
    );
  }
}

export default Search;