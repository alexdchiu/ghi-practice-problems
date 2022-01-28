window.addEventListener('DOMContentLoaded', async () => {

  mocha.setup('bdd');
  mocha.checkLeaks();

  const should = chai.should();

  const response = await fetch(window.location);
  const source = await response.text();

  describe('Your HTML template', () => {
    it('should have a doctype', () => {
      should.exist(document.doctype, "there is no doctype");
      document.doctype.name.should.equal("html");
    });
    it('should have an html tag', () => {
      document.querySelector('html').should.exist;
      source.indexOf("<html").should.be.at.least(0, "there is no html tag");
    });
    it('should have a head tag', () => {
      should.exist(document.querySelector('html > head'), "there is no correctly placed head tag");
      source.indexOf("<head").should.be.at.least(0, "there is no head tag");
    });
    it('should have a body tag', () => {
      should.exist(document.querySelector('html > body'), "there is no correctly placed body tag");
      source.indexOf("<body").should.be.at.least(0, "there is no body tag");
    });
    it('should have a title tag', () => {
      should.exist(document.querySelector('html > head > title'), "there is no correctly placed title tag");
    });
    it('should have the title "Problem 032"', () => {
      should.exist(document.querySelector('html > head > title'), "there is no correctly placed title tag");
      document.querySelector('html > head > title').should.have.text("Problem 032");
    });
    it('should have a lang="en" attribute on the html tag', () => {
      document.querySelector('html').should.have.attr('lang')
    });
  });
  describe('The header of the document', () => {
    it('should have a header as a child of the body tag', () => {
      should.exist(document.querySelector('body > header'));
    });
    it('should have a header with a child h1 tag', () => {
      should.exist(document.querySelector('body > header > h1'));
    });
    it('should have "My page" in the h1 tag', () => {
      should.exist(document.querySelector('body > header > h1'));
      document.querySelector('body > header > h1').should.have.trimmed.text("My page");
    });
  });
  describe('The main of the document', () => {
    it('should have a main as a child of the body tag', () => {
      should.exist(document.querySelector('body > main'));
    });
    it('should have a main with a child p tag', () => {
      should.exist(document.querySelector('body > main > p'));
    });
    it('should have "Under construction" in the p tag', () => {
      should.exist(document.querySelector('body > main > p'));
      document.querySelector('body > main > p').should.have.trimmed.text("Under construction");
    });
  });
  describe('The footer of the document', () => {
    it('should have a footer as a child of the body tag', () => {
      should.exist(document.querySelector('body > footer'));
    });
    it('should have a footer with a child div tag', () => {
      should.exist(document.querySelector('body > footer > div'));
    });
    it('should have "Hand crafted by an HTML artisan" in the div tag', () => {
      should.exist(document.querySelector('body > footer > div'));
      document.querySelector('body > footer > div').should.have.trimmed.text("Hand crafted by an HTML artisan");
    });
  });

  mocha.run();
});
