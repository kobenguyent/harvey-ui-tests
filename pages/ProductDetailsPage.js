import navTools from './NavTools';
import popup from './Popup';
const I = actor();

export default productDetailsPage = {
    addToCartButton: 'button[id="btn-add-to-cart"]',

    async addToCart() {
        I.click(this.addToCartButton);
        I.wait(2);
        let cartCount = await I.grabTextFrom(navTools.cartCount); 
        return cartCount === '1';
    }
}