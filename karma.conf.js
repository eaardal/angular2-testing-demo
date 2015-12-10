module.exports = function(config) {
    config.set({
        basePath: 'src',
        frameworks: ['jasmine'],
        files: [
            'node_modules/systemjs/dist/system.src.js',
            //'node_modules/angular2/bundles/angular2.dev.js',
            'test-bootstrapper.js',
            'app/hero.js',
            'app/hero.spec.js'
        ],
        exclude: [],
        preprocessors: {},
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['PhantomJS'],
        singleRun: true
    });
};
