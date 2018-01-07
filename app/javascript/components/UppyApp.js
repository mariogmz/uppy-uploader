import React from "react";
import Uppy from 'uppy/lib/core';
import Tus from 'uppy/lib/plugins/Tus';
import DragAndDrop from './DragAndDrop';

class UppyApp extends React.Component {

  getUppyInstance() {
    const uppy = Uppy({
      restrictions: { maxNumberOfFiles: 1 },
      autoProceed: true
    });
    uppy.use(Tus, { endpoint: '/upload' });
    uppy.on('complete', result => console.log(result));
    uppy.run();
    return uppy;
  }

  render () {
    return (
      <section className="uppy-app">
        <DragAndDrop getUppyInstance={this.getUppyInstance} />
      </section>
    );
  }
}

export default UppyApp;
