class CategoryPage {
 
  constructor(page) {
    this.page = page;
  }

  async openProductByName(productName) {
    await this.page.getByText(productName, { exact: true }).click();
  }
}

module.exports = { CategoryPage };