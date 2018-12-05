const I = actor();

export default homePage = {
    
    searchTextbox: 'input[title="Search"]',
    searchButton: 'button[type="Submit"]',
  
    search(searchString = 'Sony Playstation Classic Console') {
        I.fillField(this.searchTextbox, searchString);
        I.click(this.searchButton);
        I.wait(3);
    },
  };
  