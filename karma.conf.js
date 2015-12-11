module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            // Thirdparty dependencies
            'node_modules/systemjs/dist/system-polyfills.js',
            'node_modules/systemjs/dist/system.src.js',
            'node_modules/jasmine-core/lib/jasmine-core/jasmine.js',
            
            'src/app/foo.ts',
            // Test bootstrapper
            'src/test-bootstrapper.js',
            // App
            
            // Specs
            'src/app/smoke.spec.ts',
            'src/app/foo.spec.ts',            
        ],
        exclude: [],
        preprocessors: {
            'src/app/**/*.ts': ['typescript']
        },
        typescriptPreprocessor: {
            options :{
                "target": "ES5",
                "module": "commonjs",
                "sourceMap": true,
                "emitDecoratorMetadata": true,
                "experimentalDecorators": true,
                "removeComments": false,
                "noImplicitAny": false
            },
            typings: [
                'src/typings/tsd.d.ts'
            ],
            transformPath: function(path){
                return path.replace(/\.ts$/, '.js');
            }
        },
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['PhantomJS'],
        singleRun: false
    });
};
