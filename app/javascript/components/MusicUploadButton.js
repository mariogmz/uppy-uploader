import React from 'react';
import PropTypes from 'prop-types';
import DashboardModal from 'uppy/lib/react/DashboardModal';

class MusicUploadButton extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      modalOpen: false
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen () {
    this.setState({
      modalOpen: true
    })
  }

  handleClose () {
    this.setState({
      modalOpen: false
    })
  }

  getUppyInstance() {
    const options = {
      id: 'musicUpload',
      restrictions: {
        maxFileSize: 8000000,
        allowedFileTypes: ['audio/*']
      }
    }
    return this.props.getUppyInstance(options);
  }

  render() {
    return (
      <section className="music-upload">
        <button onClick={this.handleOpen}>Upload your best songs</button>
        <DashboardModal
          uppy={this.getUppyInstance()}
          closeModalOnClickOutside
          open={this.state.modalOpen}
          onRequestClose={this.handleClose}
          note="Audio files only, up to 8MB"
        />
      </section>
    );
  }
}

MusicUploadButton.propTypes = {
  getUppyInstance: PropTypes.func
};

export default MusicUploadButton;
