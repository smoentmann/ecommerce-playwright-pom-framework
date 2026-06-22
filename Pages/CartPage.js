class CartPage {
  
  constructor(page) {
    this.page = page;

    //checkout
    this.checkoutLink = page.getByRole('link', { name: ' Checkout' });
   //dropdown
this.dropdown = page.locator('#input-shipping-address');

//Shipping method
this.shippingMethodBtn = page.locator('#button-shipping-methods');
this.shippingContinue = page.getByRole('button', { name: 'Continue' });

//payment method
this.paymentMethodBtn = page.locator('#button-payment-methods');
this.paymentContinue = page.getByRole('button', { name: 'Continue' });

//Click confirm order
this.confirmOrderBtn = page.getByRole('button', { name: 'Confirm Order' });
  }



    async checkout() {
    await this.checkoutLink.click();
  }

async selectShippingAddressByIndex(index) {
    await this.dropdown.selectOption({index});
  }
    async shippingMethod() {
    await this.shippingMethodBtn.click();
    await this.shippingContinue.click();
  }
  async paymentMethod() {
    await this.paymentMethodBtn.click();
    await this.paymentContinue.click();
  }
  async confirmOrder() {
    await this.confirmOrderBtn.click();
  }

  
  }

  module.exports = { CartPage };