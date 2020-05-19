$(function() {
console.log("Hello");
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

function addAnchorLink(){
  $('h3').each(function(i){
    //var sectionId = "section";  
    //sectionId = sectionId+i;
    //$(this).attr('id',sectionId);
    var sectionId = $(this).attr('id');
    $(this).wrap('<a href="#'+sectionId+'" class="anchor"></a>');
    $(this).prepend('<img class="anchorIcon" src="images/linkIcon.png" />');
  });
  $('h3').hover(function(){
    $(this).find('.anchorIcon').toggleClass('on'); 
  });
}
addAnchorLink();

});
