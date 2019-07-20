import React, { Component } from 'react';
import { Container } from '../../components/Grid';
import Jumbotron from '../../components/Jumbotron';
import API from '../../utils/API';
import Saved from '../../components/Saved';

class SaveBook extends Component {
  state = {
    savedBooks: []
  };

  componentDidMount() {
    API.getBooks()

      .then(res => this.setState({ savedBooks: res.data }))
      .catch(err => console.log(err))
  }

  handleDeleteButton = id => {
    API.deleteBook(id)
      .then(res => this.componentDidMount())
      .catch(err => console.log(err))
  }

  render() {
    return (
      <Container fluid>
        <Jumbotron />
        <Container>
          <Saved
            savedBooks={this.state.savedBooks}
            handleDeleteButton={this.handleDeleteButton}
          />
        </Container>
      </Container>
    );
  }
}

export default SaveBook;