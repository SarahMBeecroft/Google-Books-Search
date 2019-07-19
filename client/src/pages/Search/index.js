import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron';
import API from '../../utils/API';
import { Container, Row, Col } from '../../components/Grid';
import Search from '../../components/Search';
import Results from '../../components/Results';

class SearchBooks extends Component {
  // Creates state
  state = {
    search: '',
    books: [],
    error: '',
    message: ''
  };

  // Takes value from search input 
  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  // Function to handle form submit
  handleFormSubmit = event => {
    // Prevents page from reloading 
    event.preventDefault();
    // Connects to Google API with search value
    API.searchBook(this.state.search)
      .then(res => {
        if (res.data.items === 'error') {
          throw new Error(res.data.items);
        } else {
          // Stores responses in array
          let results = res.data.items
          // Maps through the array 
          console.log(results);

          results = results.map(result => {
            // Stores book data in new object 
            result = {
              key: result.id,
              id: result.id,
              title: result.volumeInfo.title,
              authors: result.volumeInfo.authors,
              description: result.volumeInfo.description,
              image: result.volumeInfo.imageLinks.thumbnail,
              link: result.volumeInfo.infoLink
            }
            console.log(result);

            return result;
          })
          // Sets empty book array to new array of objects 
          this.setState({ books: results, error: '' })
        }
      })
      .catch(err => this.setState({ error: err.items }));
  };

  handleSavedButton = event => {
    console.log(event);
    event.preventDefault();
    console.log(this.state.books);
    let savedBooks = this.state.books.filter(book => book.id === event.target.id)
    savedBooks = savedBooks[0];
    API.saveBook(savedBooks)
      .then(this.setState(
        {
          message: alert('Book saved')
        }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Jumbotron>
          <h1>Find books using Google Books APIs!</h1>
        </Jumbotron>
        <Container>
          <Row>
            <Col size='12'>
              <Search
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
              />
            </Col>
          </Row>
        </Container>
        <br></br>
        <Container>
          <Results
            books={this.state.books}
            handleSavedButton={this.handleSavedButton}
          />
        </Container>
      </Container>
    );
  }
}

export default SearchBooks;