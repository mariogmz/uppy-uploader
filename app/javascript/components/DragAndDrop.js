import React from 'react';
import PropTypes from 'prop-types';
import DragDrop from 'uppy/lib/react/DragDrop';

class DragAndDrop extends React.Component {
  getUppyInstance() {
    return this.props.getUppyInstance({id: 'dragDrop'});
  }

  render () {
    return (
      <section className={`drag-and-drop example ${this.props.isActive ? 'active':''}`}>
        <DragDrop uppy={this.getUppyInstance()} />
      </section>
    );
  }
}

DragAndDrop.propTypes = {
  getUppyInstance: PropTypes.func,
  isActive: PropTypes.bool
};

export default DragAndDrop;
