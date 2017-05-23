(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.GameOfLife = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// const {describe, it} = require('mocha');
// const {expect} = require('chai');
// const jsdom = require('mocha-jsdom');
// const gol = require('../dist/bundle');

'use strict';

describe('Game', function () {
  jsdom();

  it('has document', function () {
    var div = document.createElement('div');
    expect(div.nodeName).eql('DIV');
  });

  // it('should exist', () => {
  //   expect(gol).to.exist;
  // })
});

},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvY3dlcm1lcnQvUHJvamVjdHMvR2FtZU9mTGlmZS90ZXN0L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQ0tBLFFBQVEsQ0FBQyxNQUFNLEVBQUUsWUFBTTtBQUNyQixPQUFLLEVBQUUsQ0FBQzs7QUFFUixJQUFFLENBQUMsY0FBYyxFQUFFLFlBQVk7QUFDN0IsUUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtBQUN2QyxVQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtHQUNoQyxDQUFDLENBQUE7Ozs7O0NBS0gsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIGNvbnN0IHtkZXNjcmliZSwgaXR9ID0gcmVxdWlyZSgnbW9jaGEnKTtcbi8vIGNvbnN0IHtleHBlY3R9ID0gcmVxdWlyZSgnY2hhaScpO1xuLy8gY29uc3QganNkb20gPSByZXF1aXJlKCdtb2NoYS1qc2RvbScpO1xuLy8gY29uc3QgZ29sID0gcmVxdWlyZSgnLi4vZGlzdC9idW5kbGUnKTtcblxuZGVzY3JpYmUoJ0dhbWUnLCAoKSA9PiB7XG4gIGpzZG9tKCk7XG5cbiAgaXQoJ2hhcyBkb2N1bWVudCcsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBleHBlY3QoZGl2Lm5vZGVOYW1lKS5lcWwoJ0RJVicpXG4gIH0pXG5cbiAgLy8gaXQoJ3Nob3VsZCBleGlzdCcsICgpID0+IHtcbiAgLy8gICBleHBlY3QoZ29sKS50by5leGlzdDtcbiAgLy8gfSlcbn0pO1xuIl19
