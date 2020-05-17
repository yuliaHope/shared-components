import React from 'react';
import CheckboxUI from './checkbox';

class Checkbox extends React.Component {
  state = { checked: !!this.props.isChecked };

  handleCheckboxChange = (event) => {
    this.setState({ checked: event.target.checked });
  };

  render() {
    return (
      <div style={{ fontFamily: 'system-ui' }}>
        <label>
          <CheckboxUI checked={this.state.checked} onChange={this.handleCheckboxChange} />
          <span>{this.props.label}</span>
        </label>
      </div>
    );
  }
}

export default Checkbox;