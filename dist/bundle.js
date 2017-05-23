(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.GameOfLife = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var Grid = {
  dimensions: {},
  rows: [],

  init: function init(w, h) {
    Grid.dimensions.width = w;
    Grid.dimensions.height = h;

    for (var i = 0; i < h; i++) {
      var row = [];
      for (var j = 0; j < w; j++) {
        row.push(Cell.create(i, j));
      }
      Grid.rows.push(row);
    }

    return Grid.rows;
  },

  build: function build() {
    var gameBoard = document.querySelector('#gol');
    gameBoard.innerHTML = '';
    Grid.rows.forEach(function (row) {
      var gridRow = document.createElement('tr');
      row.forEach(function (cell, i) {
        Cell.examine(cell);
        var celly = document.createElement('td');
        celly.classList.add('cell', 'cell-' + cell.x + cell.y);
        if (cell.y === 0) {
          celly.classList.add('end-row');
        }
        if (cell.live) {
          celly.classList.add('alive');
        }
        gridRow.appendChild(celly);
      });
      gameBoard.appendChild(gridRow);
    });
  },

  traverse: function traverse(fn) {
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

  tick: function tick() {
    Grid.traverse(function (ctxt, cell) {
      Cell.examine(cell);
    });

    Grid.traverse(function (ctxt, cell) {
      Cell.update(cell);
    });

    Grid.build();
  }
};

var Cell = {
  create: function create(x, y) {
    var cell = {};
    cell.x = x;
    cell.y = y;
    cell.live = Math.random() <= 0.5 ? true : false;
    cell.self = Cell;

    return cell;
  },

  examine: function examine(cell) {
    cell.liveNeighbors = 0;

    Cell.checkNeighbors(cell, function (ctxt, neighbor) {
      if (neighbor.live) {
        cell.liveNeighbors++;
      }
    });

    return cell;
  },

  update: function update(cell) {
    if (cell.live) {
      // if (cell.liveNeighbors === 2 || cell.liveNeighbors === 3) { console.log(cell.liveNeighbors); }
      if (cell.liveNeighbors <= 1 || cell.liveNeighbors >= 4) {
        cell.live = false;
      }
    } else if (cell.liveNeighbors === 2 || cell.liveNeighbors === 3) {
      cell.live = true;
    }
    return cell;
  },

  checkNeighbors: function checkNeighbors(cell, fn) {
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

};

exports['default'] = { Grid: Grid, Cell: Cell };
module.exports = exports['default'];

},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvY3dlcm1lcnQvUHJvamVjdHMvR2FtZU9mTGlmZS9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQ0FBLElBQU0sSUFBSSxHQUFHO0FBQ1gsWUFBVSxFQUFFLEVBQUU7QUFDZCxNQUFJLEVBQUUsRUFBRTs7QUFFUixNQUFJLEVBQUEsY0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ1QsUUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQzFCLFFBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzs7QUFFM0IsU0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUMxQixVQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7QUFDYixXQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQzFCLFdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztPQUM3QjtBQUNELFVBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3JCOztBQUVELFdBQU8sSUFBSSxDQUFDLElBQUksQ0FBQztHQUNsQjs7QUFFRCxPQUFLLEVBQUEsaUJBQUc7QUFDTixRQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQy9DLGFBQVMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0FBQ3pCLFFBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRyxFQUFLO0FBQ3pCLFVBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxD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RSxDQUFDLEVBQUUsRUFBRTtBQUMzRixZQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxFQUFFO0FBQ2hDLGNBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRS9CLFlBQUUsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDdEIsY0FBSSxPQUFPLENBQUMsSUFBSSxFQUFFO0FBQ2hCLGtCQUFNLEtBQUssQ0FBQztXQUNiO1NBQ0Y7T0FDRjtLQUNGO0dBQ0Y7O0NBRUYsQ0FBQTs7cUJBRWMsRUFBRSxJQUFJLEVBQUosSUFBSSxFQUFFLElBQUksRUFBSixJQUFJLEVBQUUiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY29uc3QgR3JpZCA9IHtcbiAgZGltZW5zaW9uczoge30sXG4gIHJvd3M6IFtdLFxuXG4gIGluaXQodywgaCkge1xuICAgIEdyaWQuZGltZW5zaW9ucy53aWR0aCA9IHc7XG4gICAgR3JpZC5kaW1lbnNpb25zLmhlaWdodCA9IGg7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGg7IGkrKykge1xuICAgICAgbGV0IHJvdyA9IFtdO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB3OyBqKyspIHtcbiAgICAgICAgcm93LnB1c2goQ2VsbC5jcmVhdGUoaSwgaikpO1xuICAgICAgfVxuICAgICAgR3JpZC5yb3dzLnB1c2gocm93KTtcbiAgICB9XG5cbiAgICByZXR1cm4gR3JpZC5yb3dzO1xuICB9LFxuXG4gIGJ1aWxkKCkge1xuICAgIGxldCBnYW1lQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ29sJyk7XG4gICAgZ2FtZUJvYXJkLmlubmVySFRNTCA9ICcnO1xuICAgIEdyaWQucm93cy5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgIGxldCBncmlkUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICAgIHJvdy5mb3JFYWNoKChjZWxsLCBpKSA9PiB7XG4gICAgICAgIENlbGwuZXhhbWluZShjZWxsKVxuICAgICAgICBsZXQgY2VsbHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpXG4gICAgICAgIGNlbGx5LmNsYXNzTGlzdC5hZGQoJ2NlbGwnLCBgY2VsbC0ke2NlbGwueH0ke2NlbGwueX1gKTtcbiAgICAgICAgaWYgKGNlbGwueSA9PT0gMCkge1xuICAgICAgICAgIGNlbGx5LmNsYXNzTGlzdC5hZGQoJ2VuZC1yb3cnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2VsbC5saXZlKSB7XG4gICAgICAgICAgY2VsbHkuY2xhc3NMaXN0LmFkZCgnYWxpdmUnKTtcbiAgICAgICAgfVxuICAgICAgICBncmlkUm93LmFwcGVuZENoaWxkKGNlbGx5KTtcbiAgICAgIH0pXG4gICAgICBnYW1lQm9hcmQuYXBwZW5kQ2hpbGQoZ3JpZFJvdyk7XG4gICAgfSlcbiAgfSxcblxuICB0cmF2ZXJzZShmbikge1xuICAgIHZhciB4LCB5O1xuICAgIHZhciBjb250ZXh0ID0geyBzdG9wOiBmYWxzZSB9O1xuICAgIG91dGVyOiBmb3IgKHkgPSAwOyB5IDwgR3JpZC5kaW1lbnNpb25zLmhlaWdodDsgeSsrKSB7XG4gICAgICBmb3IgKHggPSAwOyB4IDwgR3JpZC5kaW1lbnNpb25zLndpZHRoOyB4KyspIHtcbiAgICAgICAgZm4oY29udGV4dCwgR3JpZC5yb3dzW3ldW3hdLCB4LCB5KTtcbiAgICAgICAgaWYgKGNvbnRleHQuc3RvcCkge1xuICAgICAgICAgIGJyZWFrIG91dGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHRpY2soKSB7XG4gICAgR3JpZC50cmF2ZXJzZSgoY3R4dCwgY2VsbCkgPT4ge1xuICAgICAgQ2VsbC5leGFtaW5lKGNlbGwpO1xuICAgIH0pO1xuXG4gICAgR3JpZC50cmF2ZXJzZSgoY3R4dCwgY2VsbCkgPT4ge1xuICAgICAgQ2VsbC51cGRhdGUoY2VsbCk7XG4gICAgfSk7XG5cbiAgICBHcmlkLmJ1aWxkKCk7XG5cbiAgfVxufVxuXG5jb25zdCBDZWxsID0ge1xuICBjcmVhdGUoeCwgeSkge1xuICAgIGxldCBjZWxsID0ge307XG4gICAgY2VsbC54ID0geDtcbiAgICBjZWxsLnkgPSB5O1xuICAgIGNlbGwubGl2ZSA9IE1hdGgucmFuZG9tKCkgPD0gMC41ID8gdHJ1ZSA6IGZhbHNlO1xuICAgIGNlbGwuc2VsZiA9IENlbGw7XG5cbiAgICByZXR1cm4gY2VsbDtcbiAgfSxcblxuICBleGFtaW5lKGNlbGwpIHtcbiAgICBjZWxsLmxpdmVOZWlnaGJvcnMgPSAwO1xuICAgIFxuICAgIENlbGwuY2hlY2tOZWlnaGJvcnMoY2VsbCwgKGN0eHQsIG5laWdoYm9yKSA9PiB7XG4gICAgICBpZiAobmVpZ2hib3IubGl2ZSkge1xuICAgICAgICBjZWxsLmxpdmVOZWlnaGJvcnMrKztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBjZWxsO1xuICB9LFxuXG4gIHVwZGF0ZShjZWxsKSB7XG4gICAgaWYgKGNlbGwubGl2ZSkge1xuICAgICAgLy8gaWYgKGNlbGwubGl2ZU5laWdoYm9ycyA9PT0gMiB8fCBjZWxsLmxpdmVOZWlnaGJvcnMgPT09IDMpIHsgY29uc29sZS5sb2coY2VsbC5saXZlTmVpZ2hib3JzKTsgfVxuICAgICAgaWYgKGNlbGwubGl2ZU5laWdoYm9ycyA8PSAxIHx8IGNlbGwubGl2ZU5laWdoYm9ycyA+PSA0KSB7XG4gICAgICAgIGNlbGwubGl2ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZVxuICAgIGlmIChjZWxsLmxpdmVOZWlnaGJvcnMgPT09IDIgfHwgY2VsbC5saXZlTmVpZ2hib3JzID09PSAzKSB7XG4gICAgICBjZWxsLmxpdmUgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gY2VsbDtcbiAgfSxcblxuICBjaGVja05laWdoYm9ycyhjZWxsLCBmbikge1xuICAgIHZhciB4LCB5LCBuO1xuICAgIHZhciBjb250ZXh0ID0geyBzdG9wOiBmYWxzZSB9O1xuXG4gICAgY2hlY2s6IGZvciAoeSA9IE1hdGgubWF4KDAsIGNlbGwueSAtIDEpOyB5IDw9IE1hdGgubWluKEdyaWQuZGltZW5zaW9ucy5oZWlnaHQgLSAxLCBjZWxsLnkgKyAxKTsgeSsrKSB7XG4gICAgICBmb3IgKHggPSBNYXRoLm1heCgwLCBjZWxsLnggLSAxKTsgeCA8PSBNYXRoLm1pbihHcmlkLmRpbWVuc2lvbnMud2lkdGggLSAxLCBjZWxsLnggKyAxKTsgeCsrKSB7XG4gICAgICAgIGlmICh4ICE9PSBjZWxsLnggfHwgeSAhPT0gY2VsbC55KSB7XG4gICAgICAgICAgdmFyIG5laWdoYm9yID0gR3JpZC5yb3dzW3ldW3hdO1xuICAgICAgICAgIFxuICAgICAgICAgIGZuKGNvbnRleHQsIG5laWdoYm9yKTtcbiAgICAgICAgICBpZiAoY29udGV4dC5zdG9wKSB7XG4gICAgICAgICAgICBicmVhayBjaGVjaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCB7IEdyaWQsIENlbGwgfTsiXX0=
