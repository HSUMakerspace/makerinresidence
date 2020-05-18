window.addEventListener('scroll', function(e){
  var scrolled = window.pageYOffset;
  const background = document.querySelector('.background');
  background.style.top = - (scrolled * 0.8) + 'px';
  const title = document.querySelector('.title');
  title.style.top = - (scrolled * -0.8) + 'px';
});
