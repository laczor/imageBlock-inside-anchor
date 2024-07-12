import './style.css'

import { ClassicEditor, Essentials, Bold, Italic, Font, Paragraph, Link, LinkEditing, ImageEditing, List, ListEditing, ImageBlock } from 'ckeditor5';
import CKEditorInspector from '@ckeditor/ckeditor5-inspector';


import 'ckeditor5/ckeditor5.css';

ClassicEditor
    .create( document.querySelector( '#editor' ), {
        plugins: [ Essentials, Bold, Italic, Font, Paragraph, Link, LinkEditing,  ImageEditing, ImageBlock, List, ListEditing ],
        toolbar: {
            items: [
                'undo', 'redo', '|', 'bold', 'italic', '|',
                'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor'
            ]
        }
    } )
    .then( editor => {
      CKEditorInspector.attach( editor );
      window.ckeditor = editor;

      editor.setData(`
<ul>
    <li>
        <span class="image-inline">
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            valami
                <img src="https://i.ytimg.com/vi/jVzsrlGOcME/maxresdefault.jpg">
            </a>
        </span>
    </li>
    <span>Doing some stuff</span>
     <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"> Second link</a>
    </li>
</ul>
        <ul>
            <li><div>Randoms</div></li>
            <li><div>Randoms</div></li>
        </ul>

      `)
  } )
    .catch( /* ... */ );
