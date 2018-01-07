import React from 'react';
import Uppy from 'uppy/lib/core';
import Tus from 'uppy/lib/plugins/Tus';
import DragAndDrop from './DragAndDrop';
import MusicUploadButton from './MusicUploadButton';
import ExampleSelector from './ExampleSelector';

class UppyApp extends React.Component {
  constructor() {
    super();
    this.state = {
      activeExample: 1
    };
    this.changeActiveExample = this.changeActiveExample.bind(this);
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
    uppy.use(Tus, { endpoint: '/upload' });
    uppy.on('complete', result => console.log(result));
    uppy.run();
    return uppy;
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
      </section>
    );
  }
}

export default UppyApp;
