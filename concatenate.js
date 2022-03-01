/**
 * create a JS anc CSS file for hosting web components
 * @author: Harshal Shikre
 */
const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
    const files = [
        './dist/header-web-component/main.js',
        './dist/header-web-component/polyfills.js',
        './dist/header-web-component/runtime.js',
    ];
    await concat(files, './dist/header-web-component/header-web-component.js');
    await fs.copyFile('./dist/header-web-component/styles.css', './dist/header-web-component/header-web-component.css')
})()
