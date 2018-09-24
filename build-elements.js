const fs = require('fs-extra');
const concat = require('concat');
const baseUrl = './dist/sitaui-lib';
const copydir = require('copy-dir');

(async function build() {
  const files = [
    './node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js',
    `${baseUrl}/runtime.js`,
    `${baseUrl}/polyfills.js`,
    `${baseUrl}/main.js`
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/sita-element.js');
  // copy package to demo project (angular and react)
  await fs.copyFile('elements/sita-element.js', "../demo/sitaui-react/public/ng-elements/sita-element.js");
  await copydir.sync("./dist/sita", "../demo/sitaui-angular6/dist/sita");
})();