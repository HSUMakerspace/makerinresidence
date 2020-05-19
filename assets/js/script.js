window.addEventListener('scroll', function(e){
  var scrolled = window.pageYOffset;
  console.log("scrolled: "+scrolled);
  const background = document.querySelector('.background');
  background.style.top = - (scrolled * -0.3) + 'px';
  const midground = document.querySelector('.midground');
  midground.style.top = - (scrolled * 0.1) + 'px';
  const foreground = document.querySelector('.foreground');
  foreground.style.top = - (scrolled * 0.8) + 'px';
  
  const title = document.querySelector('.title');
  title.style.top = - (scrolled * -0.8) + 'px';
});
