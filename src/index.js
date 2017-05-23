const Grid = {
  dimensions: {},
  rows: [],

  init(w, h) {
    Grid.dimensions.width = w;
    Grid.dimensions.height = h;

    for (let i = 0; i < h; i++) {
      let row = [];
      for (let j = 0; j < w; j++) {
        row.push(Cell.create(i, j));
      }
      Grid.rows.push(row);
    }

    return Grid.rows;
  },

  build() {
    let gameBoard = document.querySelector('#gol');
    gameBoard.innerHTML = '';
    Grid.rows.forEach((row) => {
      let gridRow = document.createElement('tr');
      row.forEach((cell, i) => {
        Cell.examine(cell)
        let celly = document.createElement('td')
        celly.classList.add('cell', `cell-${cell.x}${cell.y}`);
        if (cell.y === 0) {
          celly.classList.add('end-row');
        }
        if (cell.live) {
          celly.classList.add('alive');
        }
        gridRow.appendChild(celly);
      })
      gameBoard.appendChild(gridRow);
    })
  },

  traverse(fn) {
    var x, y;
    var context = { stop: false };
    outer: for (y = 0; y < Grid.dimensions.height; y++) {
      for (x = 0; x < Grid.dimensions.width; x++) {
        fn(context, Grid.rows[y][x], x, y);
        if (context.stop) {
          break outer;
        }
      }
    }
  },

  tick() {

    Grid.traverse((ctxt, cell) => {
      Cell.examine(cell);
    });

    Grid.traverse((ctxt, cell) => {
      Cell.update(cell);
    });

    Grid.build();

  }
}

const Cell = {
  create(x, y) {
    let cell = {};
    cell.x = x;
    cell.y = y;
    cell.live = Math.random() <= 0.5 ? true : false;
    cell.self = Cell;

    return cell;
  },

  get(x, y) {
    return new Promise((resolve, reject) => {
      Grid.rows.forEach((row) => {
        row.forEach((cell, i) => {
          if (cell.x === x && cell.y === y) {
            resolve(cell);
          }
        });
      });
      reject(new Error('No matching cell!'));
    });

    return targetCell;
  },

  examine(cell) {
    cell.liveNeighbors = 0;
    
    return Cell.checkNeighbors(cell, (ctxt, neighbor) => {
      if (neighbor.live) {
        cell.liveNeighbors++;
      }
    });
  },

  update(cell) {
    let liveNeighbors = cell.liveNeighbors;

    if (cell.live) {
      if (liveNeighbors <= 1 || liveNeighbors >= 4) {
        cell.live = false;
      }
    } else
    if (liveNeighbors === 3) {
      cell.live = true;
    }
    return cell;
  },

  checkNeighbors(cell, fn) {
    var x, y, n;
    var context = { stop: false };

    check: for (y = Math.max(0, cell.y - 1); y <= Math.min(Grid.dimensions.height - 1, cell.y + 1); y++) {
      for (x = Math.max(0, cell.x - 1); x <= Math.min(Grid.dimensions.width - 1, cell.x + 1); x++) {
        if (x !== cell.x || y !== cell.y) {
          var neighbor = Grid.rows[y][x];
          
          fn(context, neighbor);
          if (context.stop) {
            break check;
          }
        }
      }
    }
  }

}

export default { Grid, Cell };