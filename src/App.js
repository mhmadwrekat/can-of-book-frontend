import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import BestBooks from './components/BestBooks';
import BookForm from './components/BookForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      title: "",
      description: "",
      email: ""
    }
  }
  componentDidMount = () => {
    console.log(REACT_APP_BACKEND_URL);
    Axios.get(`https://${REACT_APP_BACKEND_URL}/data`).then(res => {
      this.setState({
        data: res.data
      })
    })
  }
  handleBookInput = (event) => {
    this.setState({
      title: event.target.value
    })
    console.log(this.state.title);
  }
  handleBookDes = (event) => {
    this.setState({
      description: event.target.value
    })
  }
  handleBookAuthor = (event) => {
    this.setState({
      email: event.target.value
    })
  }
  handleSubmit = (event) => {
    let config = {
      method: "POST",
      baseURL: `https://${REACT_APP_BACKEND_URL}`,
      url: "/createbook",
      data: {
        title: this.state.title,
        description: this.state.description,
        email: this.state.email
      }
    }
    Axios(config).then(response => {
      this.setState({
        data: response.data
      })
      console.log("POST : ", response.data);
    })
    event.preventDefault();
  }
  handleDelete = (id) => {
    let bookId = id;
    let config = {
      method: "DELETE",
      baseURL: `https://${REACT_APP_BACKEND_URL}`,
      url: `/deletebook/${bookId}`,
    }
    Axios(config).then(response => {
      this.setState({
        data: response.data
      })
    })
  }
  render() {
    return (
      <>
        <Header />
        <BookForm
          handleSubmit={this.handleSubmit}
          handleBookInput={this.handleBookInput}
          handleBookDes={this.handleBookDes}
          handleBookAuthor={this.handleBookAuthor}
        />
        {
          this.state.data.map(item => {
            return <BestBooks
              bookId={item._id}
              title={item.title}
              description={item.description}
              status={item.status}
              email={item.email}
              handleDelete={this.handleDelete}
            />
          })
        }
        <Footer />
      </>
    )
  }
}
export default App