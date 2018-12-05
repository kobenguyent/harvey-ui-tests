import {expect} from 'chai';

Feature('Add to card functionality');

Before(async (I, popup) => {
    I.amOnPage('/');
    let conutryDetection = await I.grabNumberOfVisibleElements(popup.title);
    if (conutryDetection > 0) I.click(popup.closeButton);
});

Scenario('Add a product to shopping cart', async (I, homePage, resultPage, productDetailsPage, navTools) => {
    const searchString = 'Sony Playstation Classic Console';
    homePage.search(searchString);
    resultPage.showProductDetails();
    expect(await productDetailsPage.addToCart()).to.be.true;
    let cartCount = await I.grabTextFrom(navTools.cartCount);
    expect(cartCount).to.eql('1');
});