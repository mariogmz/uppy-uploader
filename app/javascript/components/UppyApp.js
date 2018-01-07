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
      activeExample: 0
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

  renderActiveExample() {
    switch (this.state.activeExample) {
      case 0:
        return <DragAndDrop getUppyInstance={this.getUppyInstance} />;
      case 1:
        return <MusicUploadButton getUppyInstance={this.getUppyInstance} />;
      default:
        return <h1>Uppy examples</h1>;
    }
  }

  render () {
    return (
      <section className="uppy-app">
        <ExampleSelector changeActiveExample={this.changeActiveExample} />
        {this.renderActiveExample()}
      </section>
    );
  }
}

export default UppyApp;
