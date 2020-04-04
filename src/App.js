import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render () {
    const user = {
      name: 'Xibin',
      hobbies: ['Sports', 'Basketboot']
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <Header name={"Max"} age={12} user={user}>
              <p>I am children</p>
              <p>I am children2</p>
            </Header>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
