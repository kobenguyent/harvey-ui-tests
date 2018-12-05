import {expect} from 'chai';

Feature('Search functionality');

Before(async (I, popup) => {
    I.amOnPage('/');
    let conutryDetection = await I.grabNumberOfVisibleElements(popup.title);
    if (conutryDetection > 0) I.click(popup.closeButton);
});

Scenario('Search function is displayed', (I, homePage) => {
    I.seeElement(homePage.searchTextbox);
    I.seeElement(homePage.searchButton);
});

Scenario('Search returns results', async (I, homePage, resultPage) => {
    const searchString = 'sony';
    homePage.search(searchString);
    I.seeElement(resultPage.resultBar);
    expect(await resultPage.hasResults(searchString)).to.be.true;
});