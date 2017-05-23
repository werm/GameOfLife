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
    expect(grid.dimensions.width > 0).to.be.true;
  })

  it('should have a height', () => {
    expect(grid.dimensions.height > 0).to.be.true;
  })
})

describe('Cells', () => {
  let cell, theCell;

  beforeEach(() => {

    const fixture = '<div id="gol"></div>';
    document.body.insertAdjacentHTML('afterbegin', fixture);
    cell = GameOfLife.Cell;
    grid = GameOfLife.Grid;
    grid.init(10, 10);
    theCell = cell.create(1, 1);

  });

  it('should have a cell on the grid with neighbors', () => {
    expect(cell.examine(theCell).liveNeighbors).to.be.a('number');
  })

  it('should be alive with 2 or 3 neighbor cells', () => {
    theCell.liveNeighbors = 3;
    cell.update(theCell);
    expect(theCell.live).to.be.true;
  });

  it('should be dead if neighbors <= 1 || >= 4', () => {
    theCell.liveNeighbors = 5;
    cell.update(theCell);
    expect(theCell.live).to.be.false;
  })

})