const homeScreen = require("../screens/home.screen");
const loginScreen = require("../screens/login.screen");
const myStoreScreen = require("../screens/myStore.screen");


let urlLoja = 'http://lojaebac.ebaconline.art.br/'/// Adicionar url da loja
let usuario = 'gerente'
let senha = 'GD*peToHNJ1#c$sgk08EaYJQ'


describe('Access Admin Panel', () => {
    it('shoud login with valid credentials', async () => {
        await homeScreen.goToLogin()
        await loginScreen.setStoreAddress(urlLoja)
        await loginScreen.continue()
        await loginScreen.continueWithStoreCredentials()
        await loginScreen.login(usuario, senha)
        await loginScreen.goTotwoFactorAuth()
        await loginScreen.twoFactorLogin(senha)
    
        expect (await myStoreScreen.myStoreLogoDisplayed()).toBeTruthy()
        expect(await myStoreScreen.getStoreName()).toEqual('EBAC - Shop')
    });
})