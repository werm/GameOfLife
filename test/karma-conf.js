module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['mocha', 'chai'],
        preprocessors: {
          '**/*.html': ['html2js']
        },

        files: [ '../dist/bundle.js', '../index.html', '**/*.spec.js' ],

        reporters: ['progress'], 
        port: 9876, 
        colors: true,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false
    });
};