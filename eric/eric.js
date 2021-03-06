// Generated by CoffeeScript 1.6.2
(function() {
  var canvas, color, ctx, dx, i, j, line, nx, ny, redraw, state, _i, _j, _ref,
    _this = this;

  dx = 20;

  _ref = [52, 7], nx = _ref[0], ny = _ref[1];

  canvas = document.getElementById('canvas');

  canvas.width = nx * dx;

  canvas.height = ny * dx;

  state = [];

  for (i = _i = 1; _i <= ny; i = _i += 1) {
    line = [];
    for (j = _j = 1; _j <= nx; j = _j += 1) {
      line.push(0);
    }
    state.push(line);
  }

  ctx = canvas.getContext('2d');

  color = ['rgb(255, 255, 255)', 'rgb(204, 255, 255)', 'rgb(153, 255, 255)', 'rgb(102, 255, 255)', 'rgb(51, 255, 255)', 'rgb(0, 255, 255)'];

  redraw = function() {
    var _k, _ref1, _results;

    _results = [];
    for (i = _k = 0, _ref1 = ny - 1; _k <= _ref1; i = _k += 1) {
      _results.push((function() {
        var _l, _ref2, _results1;

        _results1 = [];
        for (j = _l = 0, _ref2 = nx - 1; _l <= _ref2; j = _l += 1) {
          ctx.fillStyle = color[state[i][j]];
          _results1.push(ctx.fillRect(j * dx, i * dx, dx, dx));
        }
        return _results1;
      })());
    }
    return _results;
  };

  canvas.onmousemove = function(e) {
    var x, y, _ref1, _ref2;

    if (e.pageX || e.pageY) {
      _ref1 = [e.pageX, e.pageY], x = _ref1[0], y = _ref1[1];
    } else {
      x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    x -= canvas.offsetLeft;
    y -= canvas.offsetTop;
    _ref2 = [Math.floor(y / dx), Math.floor(x / dx)], i = _ref2[0], j = _ref2[1];
    state[i][j] += 1;
    state[i][j] %= 6;
    return redraw();
  };

}).call(this);
