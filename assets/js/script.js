window.addEventListener('scroll', function(e){
  var scrolledBG = window.pageYOffset;
  console.log("scrolled: "+scrolled);
  const background = document.querySelector('.background');
  background.style.top = (- (scrolled * 0.8)-200) + 'px';
  
  const title = document.querySelector('.title');
  title.style.top = - (scrolled * -0.8) + 'px';
});
