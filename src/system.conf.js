System.config({
    transpiler: 'typescript',
    packages: {
        'app': {
            defaultExtension: 'js'
        }
    },
    //Make sure all your dependencies, including SystemJS itself, are specified in your SystemJS config.
    //This is so karma-systemjs can add them to the list of files that karma serves.
    paths: {
      'es6-module-loader': 'node_modules/es6-module-loader/dist/es6-module-loader.js',
      'system-polyfills': 'node_modules/systemjs/dist/system-polyfills.src.js',
      'phantomjs-polyfill': 'node_modules/phantomjs-polyfill/bind-polyfill.js',
      'typescript': 'node_modules/typescript/lib/typescript.js',
      'systemjs': 'node_modules/systemjs/dist/system.src.js'      
    }
});