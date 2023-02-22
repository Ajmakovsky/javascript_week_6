

// > searchCandies('Ma', 10);
// [ 'Mars', 'Maltesers' ]

// > searchCandies('Ma', 2); // Maltesers excluded: it's more than 2
// [ 'Mars' ]

// > searchCandies('S', 10); 
// [ 'Skitties', 'Skittles', 'Starburst' ]

// > searchCandies('S', 4); 
// [ 'Skitties', 'Skittles' ]

const file = require('./candies')



describe('searchCandies', () => {
  it('searchesCandies("Ma", 10)', () => {
    expect(file.searchCandies('Ma',10)).toEqual(['Mars','Maltesers']);
  });

  it('searchesCandies("S", 4)', () => {
    expect(file.searchCandies('S',4)).toEqual([ 'Skitties', 'Skittles' ]);
  });

  it('searchesCandies("S", 10)', () => {
    expect(file.searchCandies('S',10)).toEqual([ 'Skitties', 'Skittles', 'Starburst' ]);
  });

  it('searchesCandies("Ma", 2)', () => {
    expect(file.searchCandies('Ma',2)).toEqual(['Mars']);
  });
});
