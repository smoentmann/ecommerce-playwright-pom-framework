const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { CategoryPage } = require('../pages/CategoryPage');
const { ProductsPage } = require('../pages/ProductsPage');
const { CartPage } = require('../pages/CartPage');
const { LoginPage } = require('../pages/LoginPage');


test('@sanity @regeression TC04_CompletePurchase', async ({ page }) => {
  const home = new HomePage(page);
  const category = new CategoryPage(page);
  const product = new ProductsPage(page);
  const checkout = new CartPage(page);
  const login = new LoginPage(page);

  await home.goto();
  await home.openAllLaptopsAndNotebooks();

  await category.openProductByName('HP LP3065');

  const deliveryDate = ProductsPage.buildISODatePlusDays(5);
  await product.setDeliveryDateISO(deliveryDate);

  await product.addToCart();
  await product.expectSuccessContains(expect, 'Success');

 await checkout.checkout();


  await home.clickLogin();

  await login.login('shawnamoentmann@gmail.com', 'M@nkey12');

  await checkout.selectShippingAddressByIndex(1);
  await checkout.shippingMethod();
  await checkout.paymentMethod();
  await checkout.confirmOrder();
})