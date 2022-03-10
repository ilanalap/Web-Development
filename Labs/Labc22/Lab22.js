$(document).ready(function(){
    //jQuery methods go here...
  $("#b1").click(function(){
    $("#alert").hide(5000,function(){
      alert("The paragraph is now hidden");
    });
  });
    $("#b2").click(function(){
    $("#alert").show(5000,function(){
    alert("The paragraph is now shown");
    });
  });
});
