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
  
  // copy package to  react demo project
  await fs.copyFile('elements/sita-element.js', "../demo/sitaui-react/public/ng-elements/sita-element.js");
  await fs.copyFile(`${baseUrl}/styles.css`, "../demo/sitaui-react/public/ng-elements/sita-element.css");
  await fs.copyFile(`${baseUrl}/MaterialIcons-Regular.eot`, "../demo/sitaui-react/public/ng-elements/MaterialIcons-Regular.eot");
  await fs.copyFile(`${baseUrl}/MaterialIcons-Regular.ttf`, "../demo/sitaui-react/public/ng-elements/MaterialIcons-Regular.ttf");
  await fs.copyFile(`${baseUrl}/MaterialIcons-Regular.woff`, "../demo/sitaui-react/public/ng-elements/MaterialIcons-Regular.woff");
  await fs.copyFile(`${baseUrl}/MaterialIcons-Regular.woff2`, "../demo/sitaui-react/public/ng-elements/MaterialIcons-Regular.woff2");

  // copy package to angular demo project
  await copydir.sync("./dist/sita", "../demo/sitaui-angular6/lib/sita");


  /// copy package to sitaui-npm to publish to azure feed
  await copydir.sync("./dist/sita", "../SitaUI-npm/sita");
    
})();