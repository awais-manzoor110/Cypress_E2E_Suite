class Checkout{

fname = "//input[@id='first-name']"
lname = "//input[@id='last-name']"
zip = "//input[@id='postal-code']"
conti = "//input[@id='continue']"
item_total = "//div[@class='summary_subtotal_label']"
tax = "//div[@class='summary_tax_label']"
Total = "//div[@class='summary_total_label']"
finishbtn = "//button[@id='finish']"
success_msg = "//h2[@class='complete-header']"

first_Name(firstname){
    cy.xpath(this.fname).type(firstname)
}

last_name(lastname){
    cy.xpath(this.lname).type(lastname)
}

zip_code(zip){
    cy.xpath(this.zip).type(zip)
}

continue_button(){
    cy.xpath(this.conti).click()
}

Validating_price(){

    let Total_amount;
    let item_price;
    let tax_price;
    let Total;

    cy.xpath(this.item_total).then((t)=>{
        let T_amnt = t.text()
        item_price = T_amnt.substring(T_amnt.indexOf("$")+1)
    cy.xpath(this.tax).then((ta)=>{
        let Tax_amnt = ta.text()
        tax_price = Tax_amnt.substring(Tax_amnt.indexOf("$")+1)  
        Total_amount = parseFloat(item_price) + parseFloat(tax_price)
        cy.xpath(this.Total).then((to)=>{
            let Totl_amnt = to.text()
            Total = parseFloat(Totl_amnt.substring(Totl_amnt.indexOf("$")+1))
        expect(Total).to.be.eql(Total_amount)
    })   
    })
    })   
}

finish_button(){
    cy.xpath(this.finishbtn).click()
}

success_message(){
    cy.xpath(this.success_msg).should("have.text", "THANK YOU FOR YOUR ORDER")
}

}

export default Checkout;