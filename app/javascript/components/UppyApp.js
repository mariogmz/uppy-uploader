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
      return <p>
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
      </section>
    );
  }
}

export default UppyApp;
