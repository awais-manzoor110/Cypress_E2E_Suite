class Logout{

    menu = "//button[@id='react-burger-menu-btn']"
    logoutbtn = "//a[.='Logout']"
    main = "//div[@class='login_logo']"

    menu_button(){
        cy.xpath(this.menu).click()
    }

    logout_button(){
        cy.xpath(this.logoutbtn).click()
    }

    validation(){
        cy.xpath(this.main).should("have.class", "login_logo")
    }

}

export default Logout;