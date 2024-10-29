import { _ as _decorate, s, i, e, y, a as e$1 } from './query-assigned-elements-8a604587.js';

let Base64ImageDisplay = _decorate([e$1('base64-image-display')], function (_initialize, _LitElement) {
  class Base64ImageDisplay extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: Base64ImageDisplay,
    d: [{
      kind: "field",
      static: true,
      key: "styles",
      value() {
        return i` 
fieldset {
  border: 1px gray;
  width: 360px;
  border-radius: 5px;
}

legend, label{
  color: gray; 
  font-size: 24px;
  font-family: sans-serif;
}

input {
  font-size: 18px;
  padding: 5px;
  height: 35px;
  width: 350px;
  border: 1px solid gray;
  outline: none;
  border-radius: 5px;
  color: gray;
/*   border-bottom: none; */
}
datalist {
  position: absolute;
  background-color: white;
  border: 1px solid blue;
  border-radius: 0 0 5px 5px;
  border-top: none;
  font-family: sans-serif;
  width: 350px;
  padding: 5px;
  max-height: 10rem;
  overflow-y: auto
  
}

option {
  background-color: white;
  padding: 4px;
  color: gray;
  margin-bottom: 1px;
   font-size: 18px;
  cursor: pointer;
}

option:hover,  .active{
  background-color: gray;
}
  `;
      }
    }, {
      kind: "field",
      decorators: [e()],
      key: "base64",
      value() {
        return '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';
      }
    }, {
      kind: "field",
      key: "alttext",
      value() {
        return 'Nintex';
      }
    }, {
      kind: "field",
      key: "width",
      value() {
        return 200;
      }
    }, {
      kind: "field",
      key: "height",
      value() {
        return 200;
      }
    }, {
      kind: "field",
      key: "imgtype",
      value() {
        return 'png';
      }
    }, {
      kind: "method",
      static: true,
      key: "getMetaConfig",
      value:
      // Define scoped styles right with your component, in plain CSS

      function getMetaConfig() {
        // plugin contract information
        return {
          controlName: 'Base64 Image Display',
          description: 'NAC Control to Display Base64 Images',
          groupName: 'Presales Controls',
          fallbackDisableSubmit: false,
          standardProperties: {
            readOnly: false,
            required: false,
            description: true,
            fieldLabel: true
          },
          version: '1',
          properties: {
            base64: {
              type: 'string',
              title: 'Base64 String'
            },
            alttext: {
              type: 'string',
              title: 'Alt Text'
            },
            width: {
              type: 'number',
              title: 'Width'
            },
            height: {
              type: 'number',
              title: 'Height'
            },
            imgtype: {
              type: 'number',
              title: 'Image File Type'
            }
          }
        };
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (this.height != null || this.width != null) {
          return y`
<img src="data:image/${this.imgtype};base64,${this.base64}" alt=${this.alttext} width=${this.width} height=${this.height} />
`;
        }
        if (this.height == null || this.width == null) {
          return y`
<img src="data:image/${this.imgtype};base64,${this.base64}" alt=${this.alttext} />
`;
        }
      }
    }]
  };
}, s);

export { Base64ImageDisplay };