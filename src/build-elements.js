const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js',
    './dist/navbar-dao/runtime.js',
    './dist/navbar-dao/polyfills.js',
    // './dist/navbar-dao/scripts.js',
    './dist/navbar-dao/main.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/sita-element.js');
  await fs.copyFile('elements/sita-element.js', "../sitaui-react/public/ng-elements/sita-element.js");
})();