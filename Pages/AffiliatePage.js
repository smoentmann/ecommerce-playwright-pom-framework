class AffiliatePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    this.affiliateLink = page.getByRole('link', { name: 'Affiliate', exact: true });

    this.company = page.getByRole('textbox', { name: 'Company' });
    this.website = page.getByRole('textbox', { name: 'Web Site' });
    this.taxId = page.getByRole('textbox', { name: 'Tax ID' });
    this.chequePayee = page.getByRole('textbox', { name: '* Cheque Payee Name' });

    this.continueButton = page.getByRole('button', { name: 'Continue' });
    this.successAlert = page.locator("div.alert.alert-success.alert-dismissible");
  }

  async openAffiliateLink() {
    await this.affiliateLink.click();
  }

  async fillAffiliateForm({ company, website, taxId, payeeName }) {
    await this.company.fill(company);
    await this.website.fill(website);
    await this.taxId.fill(taxId);
    await this.chequePayee.fill(payeeName);
  }

  async submit() {
    await this.continueButton.click();
  }

  async expectSuccessContains(expect, text) {
    await expect(this.successAlert).toBeVisible();
    await expect(this.successAlert).toContainText(text);
  }
}

module.exports = { AffiliatePage };