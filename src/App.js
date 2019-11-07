import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import MyUploadAdapter from './MyUploadAdapter'

function App() {
  const editConfig = {
    // plugins: [Heading, Bold, Italic, Essentials, Paragraph, Alignment, Image, ImageCaption, ImageStyle, ImageToolbar, ImageUpload, ImageResize],
    // toolbar: [ 'heading', '|', 'bold', 'italic', '|', 'undo', 'redo', ]
    // toolbar: ['heading', '|', 'bold', 'italic', '|', 'undo', 'redo', '|', 'alignment:left', 'alignment:center', 'alignment:right', 'alignment:justify']
    toolbar: ['heading', '|', 'bold', 'italic', '|', 'link', 'bulletedList', 'numberedList', 'blockQuote', '|', 'imageUpload', 'insertTable', '|', 'undo', 'redo', '|', 'alignment:left', 'alignment:right', 'alignment:center', 'alignment:justify'],
    image: {
      toolbar: ['imageTextAlternative', '|', 'imageStyle:alignLeft', 'imageStyle:full', 'imageStyle:alignRight'],
      resizeUnit: 'px',
      styles: [
        // This option is equal to a situation where no style is applied.
        'full',
        // This represents an image aligned to the left.
        'alignLeft',
        // This represents an image aligned to the right.
        'alignRight'
      ]

    },

  }
  return (
    <div className="App">
      <CKEditor
        onInit={(editor) => {
          editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
            return new MyUploadAdapter(loader);
          };

        }

        }
        editor={ClassicEditor}
        config={editConfig}
        data="<p>Hello form CKEditor 5!</p>"
      />
    </div>
  );
}

export default App;