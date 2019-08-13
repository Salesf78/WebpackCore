https://codeburst.io/how-to-use-webpack-in-asp-net-core-projects-a-basic-react-template-sample-25a3681a5fc2
https://www.robinwieruch.de/javascript-project-setup-tutorial/
https://www.sitepoint.com/beginners-guide-webpack-module-bundling/
0. Start with an empty Web App application
1. Create wwwroot, controllers, views folders
2. Modify Startup class to to use MVC, Static file, routes
3. Create Home controller and view to run the example
4. Create javascript project under wwwroot directory 
	- without 'require' (ES5) or 'import' (ES6) we have to embed the javascript in the correct order.
5. Learn javascript depedency using require
6. Introduce webpack (to help bundling all the javascript into a single javascript file)
	- npm init -y (to create package.json)
	- npm install webpack webpack-cli --save-dev 
	  (webpack-dev-server is not included here, bundle.js is used by dotnet View)
	- npm run ??? to bundle all the javascript files into 1 file
7. Introduce webpack.config.js (config file) instead of running the script directly from package.json
8. Introduce webpack plugins e.g. to include jquery to all modules, no need to require it into all the modules.
	- add plugins module into webpack.config.js (plugins is within an array in webpack.config.js)
	- add webpack.ProvidePlugin in plugins

9. Introduce babel: (to compile into vanilla javascrit so older browser can run your app)
	- npm install babel-loader@8.0.0-beta.0 @babel/core@next @babel/preset-env@next --save-dev 
	- npm install babel-loader @babel/core @babel/preset-env --save-dev 
	  (to compile ES6 into ES5 (Vanilla javascript))
	- add a module property into webpack.config.js, and create a new rule array in there.
	- rule is defined using regular expression "test"
	- preset

10.	Introduce bootstrap and custom css
	- bootstrap package have a depedency on popper.js & jquery)
	- npm install popper.js --save-dev
	- npm install bootstrap@4.0.0-beta.2 --save-dev
	- but to keep it simple we use bootstrap min css, we are not using bootstrap precompile Sass files and use loader to transform the Sass files
	- create site.css under CSS folder under wwwroot
	- npm install css-loader (include popper in plugins, create new rule to load css into javascript bundle)
	- npm install style-loader --save-dev, and create a new rule in webpack config (a loader to render the style into the html element)

	https://webpack.js.org/plugins/mini-css-extract-plugin/#extracting-css-based-on-entry
	https://hackernoon.com/the-100-correct-way-to-split-your-chunks-with-webpack-f8a9df5b7758
	https://medium.com/dailyjs/webpack-4-splitchunks-plugin-d9fbbe091fd0
11. Introduce separating CSS from javascript but for minified only
	- npm install --save-dev mini-css-extract-plugin

	https://webpack.js.org/guides/output-management/
12. Delete the ./dist folder before creating the new one.
	- npm install --save-dev clean-webpack-plugin

	https://webpack.js.org/guides/output-management/#setting-up-htmlwebpackplugin
	https://dev.to/rodeghiero_/multiple-html-files-with-htmlwebpackplugin-19bf
13. Include html.index into the ./dist folder
	- npm install --save-dev html-webpack-plugin

	https://medium.com/trabe/multiple-css-bundles-with-webpack-75f263095f09
	https://webpack.js.org/plugins/mini-css-extract-plugin/#extracting-css-based-on-entry
	Below doesn't work for webpack 4 (save in _ilmu for ref webpack 3)
11. To separate css from the javascript bundle (not in-line within javascript)
	- npm install extract-text-webpack-plugin --save-dev (to separate css from javascript)
	- modify the webpack config to accomodate this plugin
	
12. To minify the javascipt
	- npm install uglifyjs-webpack-plugin --save-dev (to minify javascript)


For other setup:
https://offering.solutions/blog/articles/2016/08/27/how-to-set-up-angular-and-webpack-in-visual-studio-with-asp.net-core/
https://medium.com/js-dojo/net-mvc-webpack-and-vue-js-part-1-tools-9227b57d4690
https://medium.com/@alexfinnarn/upgrading-from-vue-webpack-template-to-vue-cli-3-d888cd8e34d2
https://vuejsdevelopers.com/2018/03/26/vue-cli-3/
http://leruplund.dk/2017/04/15/setting-up-asp-net-core-in-visual-studio-2017-with-npm-webpack-and-typescript-part-ii/