import React from 'react';
import PropTypes from 'prop-types';

class ExampleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        "Drag and Drop", "Dashboard"
      ]
    };
  }

  renderOptions() {
    return this.state.options.map((option, index) => {
      return (
        <li
          key={`menu-option-${index}`}
          onClick={this.props.changeActiveExample.bind(null, index)}
          className={this.props.currentExample === index ? 'active':'' }>
          {option}
        </li>
      );
    });
  }

  render() {

    return (
      <nav className="example-selector">
        <ul>
          { this.renderOptions() }
        </ul>
      </nav>
    );
  }
}

ExampleSelector.propTypes = {
  changeActiveExample: PropTypes.func,
  currentExample: PropTypes.number
};

export default ExampleSelector;
