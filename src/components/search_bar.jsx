import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class SearchBar extends Component {
  const handleUpdate = (event) = {

  };

  render() {
    return (
      <input type="text" className="form-control form-search"
        onChange={this.handleUpdate} />
    );
  }
}

export default SearchBar;
