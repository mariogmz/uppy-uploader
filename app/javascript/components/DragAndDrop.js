import React from 'react';
import PropTypes from 'prop-types';
import DragDrop from 'uppy/lib/react/DragDrop';

class DragAndDrop extends React.Component {
  render () {
    const uppy = this.props.getUppyInstance();
    if (uppy !== undefined) {
      return <DragDrop uppy={this.props.getUppyInstance()} />;
    } else {
      return <p>No Uppy instance was available</p>;
    }
  }
}

DragAndDrop.propTypes = {
  getUppyInstance: PropTypes.func
};

export default DragAndDrop;
