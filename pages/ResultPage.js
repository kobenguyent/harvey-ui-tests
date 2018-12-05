const I = actor();

export default resultPage = {
    resultBar: 'h1',
    productName: 'div[class="product-item"] div[class="info"] a',
    noResult: 'h1[id="noResultsTitle"]',

    async hasResults(searchString) {
        const results = await I.grabTextFrom(this.productName);
        return results.filter(n => n)[0].toLowerCase().includes(searchString.toLowerCase());
    },

    showProductDetails() {
        I.click(this.productName);
        I.wait(2);
    }
}