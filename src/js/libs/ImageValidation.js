export default class ImageValidation {
  constructor(el, callback, error) {
    $(el).on('change', function(event) {

      const file = event.target.files[0];
      const filereader = new FileReader();
      const reader  = new FileReader();

      const blob = file.slice(0, 4);
      filereader.readAsArrayBuffer(blob);

      filereader.onloadend = function(evt) {
        if (evt.target.readyState === FileReader.DONE) {

          const uint = new Uint8Array(evt.target.result);
          let bytes = [];

          for (var i = 0; i < uint.length; i++) {
            bytes.push(uint[i].toString(16));
          }
          const hex = bytes.join('').toUpperCase();

          if (getMimetype(hex) == 'image/jpeg' || getMimetype(hex) == 'image/png') {
            if (file) {
              reader.readAsDataURL(file);
            }
          } else {
            if (error && typeof error == 'function') {
              error('Not a valid image.');
            }
          }
        }
      };

      reader.addEventListener("load", function () {
        if (callback && typeof callback == 'function') {
          callback(reader.result);
        }
      }, false);

      const getMimetype = (signature) => {
        switch (signature) {
          case '89504E47':
          return 'image/png';
          case '47494638':
          return 'image/gif';
          case '25504446':
          return 'application/pdf';
          case 'FFD8FFDB':
          case 'FFD8FFE0':
          case 'FFD8FFE1':
          case 'FFD8FFE2':
          return 'image/jpeg';
          case '504B0304':
          return 'application/zip';
          default:
          return 'Unknown filetype';
        }
      }
    })
  }
}