import React from 'react';
import PropTypes from 'prop-types';
import DragDrop from 'uppy/lib/react/DragDrop';

class DragAndDrop extends React.Component {
  render () {
    return <DragDrop uppy={this.props.getUppyInstance()} />;
  }
}

DragAndDrop.propTypes = {
  getUppyInstance: PropTypes.func
};

export default DragAndDrop;
