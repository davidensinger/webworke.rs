/**
 *
 * Smooth Scroll To
 *
 * http://codereview.stackexchange.com/questions/13111/smooth-page-scrolling-in-javascript
 *
 * Recognized Definitions:
 * function animation(effectFrame) <- duration==1000, default easing function, from==0, to==1
 * function animation(effectFrame, duration) <- default easing function, from==0, to==1
 * function animation(effectFrame, duration, easing) <- from==0, to==1
 * function animation(effectFrame, duration, from, to, easing)
 * function animation(effectFrame, duration, from, to, easing, framespacing)
 *
 * @param {Function} effectFrame Frame to render given a position param where from <= position <= to
 *    Expecting "function (position) {}"
 * @param {Number} duration Msec duration of animation
 * @param {Number} from Starting position
 * @param {Number} to Ending position
 * @param {Function} easing Easing function compatible with jQuery Easing plugin
 *    http://gsgd.co.uk/sandbox/jquery/easing/
 * @param {Number} framespacing Parameter to setTimeout, exposed to allow tweaking for smoothness
 *
 */

function animation(effectFrame, duration, from, to, easing, framespacing) {
  var start = Date.now(), change;

  if (animation.existing) {
    window.clearTimeout(animation.existing);
  }

  duration = duration || 1000;
  if (typeof from === 'function') {
    easing = from;
    from = 0;
  }
  easing = easing || function(x, t, b, c, d) { return c * t / d + b; };
  from = from || 0;
  to = to || 1;
  framespacing = framespacing || 1;
  change = to - from;

  (function interval() {
    var time = Date.now() - start;
    if (time < duration) {
      effectFrame(easing(0, time, from, change, duration));
      animation.existing = window.setTimeout(interval, framespacing);
    } else {
      effectFrame(to);
    }
  }());
}

function smoothScrollTo(target, duration) {
  var start = window.pageYOffset;
  duration = duration || 1000;
  animation(function (position) { window.scroll(0,position); }, duration, start, target);
};
