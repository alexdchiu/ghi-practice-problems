window.addEventListener('DOMContentLoaded', async () => {

  mocha.setup('bdd');
  mocha.checkLeaks();

  chai.should();

  describe('The pet owner list', () => {
    it('should have eight people in it', () => {
      document
        .querySelectorAll('main > ul > li')
        .should.have.length(8);
    });
  });

  const owners = [['Asa', 1], ['Asha', 2], ['Baz', 1], ['Caris', 1], ['Idirs', 3],
                  ['Kala', 1], ['Kamal', 1], ['Nia', 3]];
  let index = 1;
  for (let [name, pets] of owners) {
    (i => (
      describe(`${name}'s list`, () => {
        it(`should have ${pets} entries`, () => {
          document
            .querySelectorAll(`main > ul > li:nth-child(${i}) > ul > li`)
            .should.have.length(pets);
        });
      })
    ))(index);
    index += 1;
  }

  mocha.run();
});
