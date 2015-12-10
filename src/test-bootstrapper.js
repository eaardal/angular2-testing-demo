System.config({
    transpiler: 'typescript',
    packages: {
        'app': {
            defaultExtension: 'js'
        }
    },

});
/*
https://github.com/babel/karma-babel-preprocessor/issues/10

meta: {
    'app': {
        format: 'cjs' // CommonJS, since TypeScript use this (tsconfig.json)
    }
}
*/
Promise.all(
    Object.keys(window.__karma__.files) // All files served by Karma.
    .filter(onlySpecFiles)
    .map(file2moduleName) // Normalize paths to module names.
    .map(function(path) {
        console.log('gothere2', path);
        return System.import(path).then(function(module) {
            console.log('gothere3', module);
            if (module.hasOwnProperty('main')) {
                console.log('gothere4 - executing main()');
                module.main();
            } else {
                throw new Error('Module ' + path + ' does not implement main() method.');
            }
        }, function(error){
            console.log('gothere5 - catch block', error);
        });
    })).then(function() {
    __karma__.start();
}, function(error) {
    __karma__.error(error.stack || error);
});

function onlySpecFiles(path) {
    var isMatch = /\.spec\.js$/.test(path);
    console.log('gothere1', path, isMatch);
    return isMatch;
}

function file2moduleName(filePath) {
    return filePath.replace(/\\/g, '/')
        // module name should be relative to `modules` and `tools` folder
        .replace(/.*\/modules\//, '')
        //  and 'dist' folder
        .replace(/.*\/dist\/js\/dev\/es5\//, '')
        // module name should not include `lib`, `web` folders
        // as they are wrapper packages for dart
        .replace(/\/web\//, '/')
        .replace(/\/lib\//, '/')
        // module name should not have a suffix
        .replace(/\.\w*$/, '');
}
/*
Promise.all([
        System.import('app/hero'),
        System.import('app/hero.spec'),
        //System.import('app/init-caps-pipe.spec')
    ])
    .then(function() {

    })
    .catch(console.error.bind(console));





// Tun on full stack traces in errors to help debugging
Error.stackTraceLimit=Infinity;

jasmine.DEFAULT_TIMEOUT_INTERVAL = 100;

// Cancel Karma's synchronous start,
// we will call `__karma__.start()` later, once all the specs are loaded.
__karma__.loaded = function() {};

System.config({
  baseURL: '/base/',
  defaultJSExtensions: true,
  paths: {
    'benchpress/*': 'dist/js/dev/es5/benchpress/*.js',
    'angular2/*': 'dist/js/dev/es5/angular2/*.js',
    'angular2_material/*': 'dist/js/dev/es5/angular2_material/*.js',
    'rxjs/*': 'node_modules/rxjs/*.js'
  }
});

window.angularDevMode = true;

// Import all the specs, execute their `main()` method and kick off Karma (Jasmine).
System.import('angular2/src/platform/browser/browser_adapter').then(function(browser_adapter) {
  browser_adapter.BrowserDomAdapter.makeCurrent();
}).then(function() {
  return Promise.all(
    Object.keys(window.__karma__.files) // All files served by Karma.
    .filter(onlySpecFiles)
    .map(window.file2moduleName)        // Normalize paths to module names.
    .map(function(path) {
      return System.import(path).then(function(module) {
        if (module.hasOwnProperty('main')) {
          module.main();
        } else {
          throw new Error('Module ' + path + ' does not implement main() method.');
        }
      });
    }));
})
.then(function() {
  __karma__.start();
}, function(error) {
  __karma__.error(error.stack || error);
});


function onlySpecFiles(path) {
  return /_spec\.js$/.test(path);
}
*/
