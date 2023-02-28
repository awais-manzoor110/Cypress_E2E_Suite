/// <reference  types="cypress" />
class Add_to_cart{

    product_list = "//div/div/div/div/a/div"
    add_to_cart_btn = "//button[.='Add to cart']"
    cart_btn = "//a[@class='shopping_cart_link']"
    pro_verification = "//div[@class='inventory_item_name']"
    check_out_btn = "//button[.='Checkout']"

    products(){
        let pro_name;
        
         cy.xpath(this.product_list).each(($ele, index, $list)=>{
            pro_name = $ele.text()
            if( pro_name === "Sauce Labs Backpack"){
               cy.xpath(this.add_to_cart_btn).first().click()
            }   
        }) 
    }

    added_to_cart(){
        cy.xpath(this.cart_btn).click()
    }

    product_validation(){
        cy.xpath(this.pro_verification).should("have.text", "Sauce Labs Backpack")
    }

    checout_button(){
        cy.xpath(this.check_out_btn).click()
    }
} 

export default Add_to_cart;