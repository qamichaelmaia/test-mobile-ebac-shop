const {join} = require ('path')

exports.config = {


    hostname: 'localhost',
    port: 4723,
    path: '/wd/hub',


    specs: [
        './test/specs/**/*.spec.js'
    ],

    maxInstances: 10,

    framework: 'mocha',
    capabilities: [{
        "platformName": "Android",
        "appium:platformVersion": "9.0",
        "appium:deviceName": "Loja-Ebac",
        "appium:automationName": "UiAutomator2",
        "appium:appActivity": "ui.main.MainActivity",
        "appium:appMainActivity": "com.woocommerce.android.ui.login.LoginActivity",
        "appium:newCommandTimeout": "240"
    }]
}