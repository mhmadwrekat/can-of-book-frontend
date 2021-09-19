import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import BestBooks from './components/BestBooks';
import Axios from 'axios';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: []
    }
}
componentDidMount = () => {
    Axios.get('http://localhost:8025/databooks').then(res => {
        this.setState({
            data : res.data
        }) 
    })

}
  render() {
    return (
      <>
      <Header />
      {
        this.state.data.map(item => {
          return <BestBooks 
          title={item.title}
          description={item.description}
          status={item.status}
          email={item.email} />
        })
      }
      <Footer />
      </>
    )
  }
}

export default App