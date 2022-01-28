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
    it('should have the title "Problem 003"', () => {
      should.exist(document.querySelector('html > head > title'), "there is no correctly placed title tag");
      document.querySelector('html > head > title').should.have.text("Problem 003");
    });
    it('should have a lang="en" attribute on the html tag', () => {
      document.querySelector('html').should.have.attr('lang')
    });
  });

  mocha.run();
});
