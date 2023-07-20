const {join} = require ('path')

exports.config = {


    hostname: 'localhost',
    port: 4723,
    path: '/wd/hub',



    specs: [
        './test/specs/**/*.js'
    ],

    maxInstances: 10,

    framework: 'mocha',
    capabilities: [{
        "platformName": "Android",
        "appium:platformVersion": "9.0",
        "appium:deviceName": "ebac-mobile",
        "appium:automationName": "UiAutomator2",
        "appium:app": "C:\\Users\\conta\\Desktop\\TEST-MOBILE-EBAC-SHOP\\app\\android\\loja-ebac.apk",
        "appium:appWaitActivity": ".MainActivity"
    }]
}