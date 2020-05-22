$(function() {
  
window.addEventListener('scroll', function(e){
  var scrolled = window.pageYOffset;
  //console.log("scrolled: "+scrolled);
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
    $(this).prepend('<img class="anchorIcon" src="images/anchorIcon.png" />');
  });
  $('h3').hover(function(){
    $(this).find('.anchorIcon').toggleClass('on'); 
  });
}
addAnchorLink();
  
  $('.openTranscript').click(function(){
    $('#transcript').toggleClass('on');
    var toggleText = $('.openTranscriptToggle').first().text().trim();
    console.log("toggleText: "+toggleText);
    if (toggleText === 'View Transcript'){
      $('.openTranscriptToggle').text("Close Transcript");
    } else if (toggleText === 'Close Transcript'){
      $('.openTranscriptToggle').text("View Transcript");
    }     
  });

});
