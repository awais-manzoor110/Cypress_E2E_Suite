import Add_to_cart from "../../pageObjects/add_to_cart";
import Login from "../../pageObjects/login";
import Checkout from "../../pageObjects/checkout";
import Logout from "../../pageObjects/logout";
describe("E2E Suite", ()=>{
    // Page Objects
    let userData;
    let user = new Login;
    let cart = new Add_to_cart;
    let checkout = new Checkout;
    let logout = new Logout;
// Before Hook
    before(()=>{
        cy.visit("/");

        cy.fixture("swag_lab_data").then((data)=>{ 
            userData = data;
        })
    })
    it("E2E_Flow",()=>{
        user.username(userData.username)
        user.user_password(userData.password)
        user.login_btn()
        user.logo_verification()
        cart.products()
        cart.added_to_cart()
        cart.product_validation()
        cart.checout_button()
        checkout.first_Name(userData.Fname)
        checkout.last_name(userData.Lname)
        checkout.zip_code(userData.Zipcode)
        checkout.continue_button()
        checkout.Validating_price()
        checkout.finish_button()
        checkout.success_message()
    })
// After Hook
    after(()=>{
         
        logout.menu_button()
        logout.logout_button()
        logout.validation()
    })

})   

