
  var svgItems = document.querySelectorAll(".bubble-path");

  svgItems.forEach(function(path) {
    console.log("hello world!");
    var pathLength = path.getTotalLength();
  
    path.style.strokeDasharray = pathLength + ' ' + pathLength;

    path.style.strokeDashoffset = pathLength;

    window.addEventListener("scroll", function(e) {

      // What % down is it? 
      var scrollPercentage = (document.documentElement.scrollTop*1 + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

      // Length to offset the dashes
      var drawLength = pathLength * scrollPercentage;

      // Draw in reverse
      path.style.strokeDashoffset = pathLength - drawLength;

    });
  });
