<!--
*** Thanks for checking out the Micro frontend code. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** Don't forget to give the project a star!
*** Thanks again! Now learn something AMAZING! :D
-->

<!-- ABOUT THE PROJECT -->
## This is the simple micro frontend project. I have created the simple web component and added some input and output paramaters here for the communication between container and web component.

### Built With
* [Angular](https://angular.io/)

<!-- GETTING STARTED -->
### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app.

1. Clone the web container repo
   ```sh
   git clone https://github.com/harshal77/web-container.git
   git clone https://github.com/harshal77/web-component-header.git
   ```
2. Install NPM packages in both application
   ```sh
   npm install
   ```
3. Create a build of Header web app
   ```sh
  ng build  --output-hashing none
   ```
4. Concate all build files ex) main, polyfills and runtime and style
   ```sh
  node concatenate.js
   ```
4. Copy both header-web-component.js and header-web-component.css and paste into container assets folder.
  
