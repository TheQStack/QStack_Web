import React from 'react';
import './AddDeviceForm.css';

class AddDeviceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      manufacturer: '',
      numQubits: '',
      connectivity: '',
      certificate: null,
      errors: {},  // Initialize errors as an empty object
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleFileChange = (event) => {
    this.setState({
      certificate: event.target.files[0]
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let errors = {};

    // Validate the form fields
    if (!this.state.type) {
      errors.type = 'Type is required';
    }
    if (!this.state.manufacturer) {
      errors.manufacturer = 'Manufacturer is required';
    }
    if (!this.state.numQubits) {
      errors.numQubits = 'Number of Qubits is required';
    }
    if (!this.state.connectivity) {
      errors.connectivity = 'Connectivity is required';
    }
    if (!this.state.certificate) {
      errors.certificate = 'Certificate is required';
    }

    if (Object.keys(errors).length > 0) {
      // If there are errors, update the state and stop the form submission
      this.setState({ errors });
      return;
    }

    // Handle the form submission here
  }

  render() {
    return (
      <form className="add-device-form" onSubmit={this.handleSubmit}>
        <label>
          Type:
          <select name="type" value={this.state.type} onChange={this.handleInputChange}>
            <option value="">Select...</option>
            <option value="trapped ion">Trapped Ion</option>
            <option value="superconducting">Superconducting</option>
          </select>
        </label>
        <label>
          Manufacturer:
          <input type="text" name="manufacturer" value={this.state.manufacturer} onChange={this.handleInputChange} />
        </label>
        <label>
          Number of Qubits:
          <input type="number" name="numQubits" value={this.state.numQubits} onChange={this.handleInputChange} />
        </label>
        <label>
          Connectivity Options:
          <select name="connectivity" value={this.state.connectivity} onChange={this.handleInputChange}>
            <option value="">Select...</option>
            <option value="cloud access">Cloud Access</option>
            <option value="on-prem API">On-prem API</option>
          </select>
        </label>
        <label>
          Upload Certificate:
          <input type="file" name="certificate" onChange={this.handleFileChange} />
        </label>
        <input type="submit" value="Submit" />
        {this.state.errors.type && <div className="error">{this.state.errors.type}</div>}
        {this.state.errors.manufacturer && <div className="error">{this.state.errors.manufacturer}</div>}
        {this.state.errors.numQubits && <div className="error">{this.state.errors.numQubits}</div>}
        {this.state.errors.connectivity && <div className="error">{this.state.errors.connectivity}</div>}
        {this.state.errors.certificate && <div className="error">{this.state.errors.certificate}</div>}
      </form>
    );
  }
}

export default AddDeviceForm;