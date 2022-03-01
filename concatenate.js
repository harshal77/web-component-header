/**
 * create a JS anc CSS file for hosting web components
 * @author: Harshal Shikre
 */
const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
    const files = [
        './dist/header-web-component/runtime.a5a98c5e06eb112d0a9d.js',
        './dist/header-web-component/polyfills.bca8a9d5228413bd0f66.js',
        './dist/header-web-component/main.58275c1312530eb58e47.js',
    ];
    await concat(files, './dist/header-web-component/header-web-component.js');
    await fs.copyFile('./dist/header-web-component/styles.31d6cfe0d16ae931b73c.css', './dist/header-web-component/header-web-component.css')
})()
