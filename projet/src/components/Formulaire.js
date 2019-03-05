import React, { Component } from 'react';
import '../style/Widget.css';


class Formulaire extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '',places: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
      this.setState({places:  e.target.value});
    //  this.props.onNBplace(e.target.value);
  }

  handleSubmit(event) {
    this.props.onNBplace(this.state.places);
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (

      <div className="Formulaire">
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.props.places} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }

}



export default Formulaire;
