import React from "react";
import PropTypes from "prop-types";
import DashboardModal from 'uppy/lib/react/DashboardModal';

class FileUploader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
  }

  handleOpen() {
    this.setState({
      modalOpen: true
    });
  }

  handleClose() {
    this.setState({
      modalopen: false
    });
  }

  render () {
    return (
      <div>
        <button onClick={this.handleOpen}>Upload some music</button>
        <DashboardModal
          uppy={this.props.uppy}
          closeModalOnClickOutside
          open={this.state.modalOpen}
          onRequestClose={this.handleClose}
        />
      </div>
    );
  }
}

FileUpload.propTypes = {};

export default FileUploader;
