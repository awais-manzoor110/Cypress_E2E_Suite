class Login{

    user = "//input[@id='user-name']"
    password = "//input[@id='password']"
    btn = "//input[@id='login-button']"
    logo = "//span[.='Products']"

    username(username){
        cy.xpath(this.user).type(username)
    }

    user_password(password){
        cy.xpath(this.password).type(password)
    }

    login_btn(){
        cy.xpath(this.btn).click()
    }

    logo_verification(){
        cy.xpath(this.logo).should("have.text", "Products")
    }
}

export default Login;