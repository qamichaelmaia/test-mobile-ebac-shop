class LoginScreen {
    get #storeAddress(){
        return $('id:button_login_store')
    }

    async goToLogin(){
        this.#storeAddress.click()

    }
}

module.exports = new LoginScreen