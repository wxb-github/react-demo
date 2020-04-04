import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            Name: { this.props.name }
            Age: { this.props.age }
            <ul>
              { this.props.user.hobbies.map((item, index) => <li key={ index }>{ item }</li>) }
            </ul>
            <div>
              { this.props.children }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  user: PropTypes.object
};

export default Header;
