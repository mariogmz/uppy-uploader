import React from 'react';
import PropTypes from 'prop-types';
import DragDrop from 'uppy/lib/react/DragDrop';

class DragAndDrop extends React.Component {
  getUppyInstance() {
    return this.props.getUppyInstance({id: 'dragDrop'});
  }

  render () {
    return <DragDrop uppy={this.getUppyInstance()} />;
  }
}

DragAndDrop.propTypes = {
  getUppyInstance: PropTypes.func
};

export default DragAndDrop;
