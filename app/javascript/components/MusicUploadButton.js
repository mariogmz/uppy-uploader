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

  render() {
    return (
      <section className="music-upload">
        <button onClick={this.handleOpen}>Upload some music</button>
        <DashboardModal
          uppy={this.props.getUppyInstance()}
          closeModalOnClickOutside
          open={this.state.modalOpen}
          onRequestClose={this.handleClose}
        />
      </section>
    );
  }
}

MusicUploadButton.propTypes = {
  getUppyInstance: PropTypes.func
};

export default MusicUploadButton;
