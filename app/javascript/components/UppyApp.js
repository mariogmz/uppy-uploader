import React from 'react';
import Uppy from 'uppy/lib/core';
import XHRUpload from 'uppy/lib/plugins/XHRUpload';
import DragAndDrop from './DragAndDrop';
import MusicUploadButton from './MusicUploadButton';
import ExampleSelector from './ExampleSelector';

class UppyApp extends React.Component {
  constructor() {
    super();
    this.state = {
      activeExample: 1,
      message: ''
    };
    this.changeActiveExample = this.changeActiveExample.bind(this);
    this.getUppyInstance = this.getUppyInstance.bind(this);
  }

  changeActiveExample(nextExample) {
    if(nextExample !== this.state.activeExample) {
      this.setState({ activeExample: nextExample });
    }
  }

  getUppyInstance(options) {
    let defaultOptions = options || {
      restrictions: { maxNumberOfFiles: 1 },
      autoProceed: true
    };
    const uppy = Uppy(defaultOptions);
    const self = this;
    uppy.use(XHRUpload, {
      endpoint: '/upload',
      getResponseData: (xhr) => {
        const response = JSON.parse(xhr.response);
        self.setState({message: response.message});
        return { url: xhr.responseURL };
      },
      getResponseError: (xhr) => {
        const response = JSON.parse(xhr.response);
        self.setState({message: response.message});
      }
    });
    uppy.on('complete', result => console.log(result));
    uppy.run();
    return uppy;
  }

  showMessage() {
    if(this.state.message !== undefined && this.state.message.length > 0) {
      return <p className="messages">
        {this.state.message}
      </p>
    }
  }

  render () {
    return (
      <section className="uppy-app">
        <ExampleSelector
          changeActiveExample={this.changeActiveExample}
          currentExample={this.state.activeExample} />
          <DragAndDrop
            getUppyInstance={this.getUppyInstance}
            isActive={this.state.activeExample ===  0} />
          <MusicUploadButton
            getUppyInstance={this.getUppyInstance}
            isActive={this.state.activeExample ===  1} />
          {this.showMessage()}
          <p>
            A more customizable and complete example can be found at <a href="https://uppy.io/examples/dashboard/">www.uppy.io/examples/dashboard</a>
          </p>
          <p>
            There is a lot of options to fully customize uppy, also includes integrations:
            <ul>
              <li> Upload from local disk </li>
              <li> Take photo from webcam </li>
              <li> Google Drive </li>
              <li> Dropbox </li>
              <li> Instagram </li>
            </ul>
          </p>
          <p> Also we have the possibility to upload the files directly to the Rails backend or
              either use an open protocol like <a href="https://tus.io"> Tus </a> if we want to
              support resumable file uploads
          </p>
          <p> Integrations with AwsS3 Buckets are possible </p>
          <p> We can customize which files are allowed on each separated uploader, restrict file sizes,
              use localization, custom messages for some case, and also there are React-Ready components
              to integrate from scratch or as an addition to an already existent project.
          </p>
      </section>
    );
  }
}

export default UppyApp;
