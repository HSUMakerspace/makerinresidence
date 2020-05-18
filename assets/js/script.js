window.addEventListener('scroll', function(e){
  var scrolledBG = window.pageYOffset;
  const background = document.querySelector('.background');
  const title = document.querySelector('.title');
  var scrolledtitle = background.getBoundingClientRect();
  var titlePos = scrolledtitle.top;
  var scrolledBG = background.getBoundingClientRect();
  var BGPos = scrolledBG.top;
  background.style.top = - (BGPos * 0.8) + 'px';
  const title = document.querySelector('.title');
  title.style.top = - (titlePos * -0.8) + 'px';
});
