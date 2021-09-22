import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import BestBooks from './components/BestBooks';
import BookForm from './components/BookForm';
import UpdateForm from './components/UpdateForm';
import Profile from './components/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      title: "",
      description: "",
      email: "",
      ids: "",
      showUpdate: false,
      showForm: false
    }
  }
  componentDidMount = () => {
    console.log(REACT_APP_BACKEND_URL);
    Axios.get(`https://${REACT_APP_BACKEND_URL}/data`).then(res => {
      this.setState({ data: res.data })
    })
  }
  handleBookInput = (event) => { this.setState({ title: event.target.value }); }
  handleBookDes = (event) => { this.setState({ description: event.target.value }); }
  handleBookAuthor = (event) => { this.setState({ email: event.target.value }); }
  handleSubmit = (event) => {
    let config = {
      method: "POST", baseURL: `https://${REACT_APP_BACKEND_URL}`, url: "/createbook",
      data: {
        title: this.state.title,
        description: this.state.description,
        email: this.state.email
      }
    }
    Axios(config).then(response => { this.setState({ data: response.data }) })
    event.preventDefault();
  }
  handleDelete = (id) => {
    let bookId = id;
    let config = { method: "DELETE", baseURL: `https://${REACT_APP_BACKEND_URL}`, url: `/deletebook/${bookId}`, }
    Axios(config).then(response => { this.setState({ data: response.data }) })
  }
  handleUpdate = (id, title, description, email) => {
    this.setState({
      title: title,
      description: description,
      email: email,
      ids: id,
      showUpdate: true,
    })
  }
  handleUpdateForm = (event) => {
    let config = {
      method: "PUT",
      baseURL: `https://${REACT_APP_BACKEND_URL}`,
      url: `/updatebook/${this.state.ids}`,
      data: { title: this.state.title, description: this.state.description, email: this.state.email }
    }
    Axios(config).then(response => { this.setState({ data: response.data }) });
  }
  Show = () => { this.setState({ showForm: true }) }
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/Profile">
            {this.props.auth0.isAuthenticated ? <>
              <Profile
                picture={this.props.auth0.user.picture}
                name={this.props.auth0.user.name}
                myEmail={this.props.auth0.user.email}
              /><br></br><br></br><br></br><Footer />
            </> : <br></br>}
          </Route>
          <Route path="/BestBook">
            {this.props.auth0.isAuthenticated ?
              <>
                {!this.state.showForm ?
                  <div class='Bu'><Button id='ADD' variant="light" onClick={this.Show}>Add Book
                  </Button></div> :
                  <BookForm
                    handleSubmit={this.handleSubmit}
                    handleBookInput={this.handleBookInput}
                    handleBookDes={this.handleBookDes}
                    handleBookAuthor={this.handleBookAuthor}
                  />}
                {!this.state.showUpdate ? <br></br> :
                  <UpdateForm
                    handleUpdateForm={this.handleUpdateForm}
                    handleBookInput={this.handleBookInput}
                    handleBookDes={this.handleBookDes}
                    handleBookAuthor={this.handleBookAuthor}
                    title={this.state.title}
                    description={this.state.description}
                    email={this.state.email}
                  />}
                <hr></hr>
                <h2 id='fontApp'>BOOKS LIBRARY</h2>
                {this.state.data.map(item => {
                  return <BestBooks
                    bookId={item._id}
                    title={item.title}
                    description={item.description}
                    status={item.status}
                    email={item.email}
                    handleDelete={this.handleDelete}
                    handleUpdate={this.handleUpdate}
                  />
                })}
                <Footer />
              </> : <br></br>
            }
          </Route>
        </Switch>
      </Router>
    )
  }
}
export default withAuth0(App);