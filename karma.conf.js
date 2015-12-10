module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'node_modules/systemjs/dist/system-polyfills.js',
            'node_modules/systemjs/dist/system.src.js',
            'node_modules/jasmine-core/lib/jasmine-core/jasmine.js',
            //'node_modules/jasmine-core/lib/jasmine-core/jasmine-html.js',
            //'node_modules/jasmine-core/lib/jasmine-core/boot.js',
            //'node_modules/angular2/bundles/angular2.dev.js',
            'src/test-bootstrapper.js',
            'src/app/hero.js',
            'src/app/hero.spec.js'
        ],
        exclude: [],
        preprocessors: {},
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_DEBUG,
        autoWatch: false,
        browsers: ['Chrome'],
        singleRun: false
    });
};
