function headsUp(el) {
  var elH = el.clientHeight,
    offset = 0,
    lastScroll = 0;
  
  function makeOffset() {
      var scrollY = document.documentElement.scrollTop || document.body.scrollTop,
        diff = scrollY - lastScroll;
  
      offset = (offset + diff > elH) ? elH : (scrollY < 0) ? 0 : offset + diff;
      offset = (offset < 0) ? 0 : offset;

      el.style.top = (-offset) + 'px';

      lastScroll = scrollY;
  }
  
  if (window.addEventListener) return window.addEventListener('scroll', makeOffset);
  window.attachEvent('onscroll', makeOffset);

}
var header = document.querySelectorAll('header')[0];
headsUp(header);