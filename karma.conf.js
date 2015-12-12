module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', 'systemjs'],
        plugins: [
            'karma-chrome-launcher',
            'karma-coverage',
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-typescript-preprocessor',
            'karma-systemjs'
        ],
        //files: [], // Loaded through systemjs
        //exclude: [],     
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_DEBUG,
        autoWatch: false,
        browsers: ['Chrome'],
        singleRun: true,
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
        systemjs: {
            baseUrl: '',
            configFile: 'src/system.conf.js',
            //includeFiles: [ ],
            // Thirdparty libraries:
            serveFiles: [
                'src/app/**/*.js'    
            ],

            // Test-context specific configuration, loaded after systemjs.conf.js
            //config: {
              //  paths: {

                //}
            //}  
        }
    });
};
