import React from "react";
import Uppy from 'uppy/lib/core';
import Tus from 'uppy/lib/plugins/Tus';
import DragDrop from 'uppy/lib/react/DragDrop';

class UppyApp extends React.Component {
  constructor() {
    super();
    this.state = {
      uppy: this.initializeUppy()
    }
  }

  initializeUppy() {
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
        <DragDrop
          uppy={this.state.uppy}
          locale={{
            strings: {
              chooseFile: 'Upload a new file dude!'
            }
          }}
        />
      </section>
    );
  }
}

export default UppyApp;
