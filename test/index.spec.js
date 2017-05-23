describe('Game', () => {

  it('should exist', () => {
    expect(GameOfLife).to.exist;
  })

  it('should have a Grid object', () => {
    expect(GameOfLife.Grid).to.exist;
  })

  it('should have a Cell object', () => {
    expect(GameOfLife.Cell).to.exist;
  })

});

describe('Build grid', () => {
  var grid;

  beforeEach(() => {

    const fixture = '<div id="gol"></div>';
    document.body.insertAdjacentHTML('afterbegin', fixture);
    grid = GameOfLife.Grid;
    grid.init(10, 10);

  });

  it('should have rows', () => {
    expect(grid.rows.length > 0).to.be.true;
  });

  it('should have a width', () => {
    console.log(grid.dimensions);
    expect(grid.dimensions.width > 0).to.be.true;
  })

  it('should have a height', () => {
    expect(grid.dimensions.height > 0).to.be.true;
  })
})

describe('Create Cells', () => {
  let cell;

  beforeEach(() => {

    const fixture = '<div id="gol"></div>';
    document.body.insertAdjacentHTML('afterbegin', fixture);
    cell = GameOfLife.Cell;
    cell.create(1, 1);

  });

  it('should have a cell at 1 x 1', () => {
    cell.get(1, 1)
    .then((res) => {
      console.log(res);
      expect(res).to.exist;
    })
    .catch((err) => {
      console.error(err);
    })
  });

})