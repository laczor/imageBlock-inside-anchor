import './style.css'

import { ClassicEditor, Essentials, Font, Paragraph, Link, LinkEditing, ImageEditing, ImageBlock } from 'ckeditor5';
import CKEditorInspector from '@ckeditor/ckeditor5-inspector';


import 'ckeditor5/ckeditor5.css';

ClassicEditor
    .create( document.querySelector( '#editor' ), {
        plugins: [ Essentials, Font, Paragraph, Link, LinkEditing,  ImageEditing, ImageBlock,  ],
        toolbar: {
            items: [    'undo', 'redo', '|', 'link' ]
        }
    } )
    .then( editor => {
      CKEditorInspector.attach( editor );
      window.ckeditor = editor;

      editor.setData(`
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <img src="https://i.ytimg.com/vi/jVzsrlGOcME/maxresdefault.jpg" height="100px" width="100px">
        </a>
      `)
  } )
    .catch( /* ... */ );
