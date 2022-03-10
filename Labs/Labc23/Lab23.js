function move(){
  $("#divv").animate({left:"+=500px"}, 1000);
  $("#divv").animate({top:"+=100px"}, 500);
  $("#divv").animate({left:"-=1000px"}, 3000);
  $("#divv").animate({top:"-=100px"}, 1000);
  $("#divv").animate({left:"+=500px"}, 500);
};

function opa(){
  $("#divv").animate({opacity:"0.2"}, 1000)
  .animate({opacity:"1"}, 500)
  .animate({opacity:"0.7"}, 1000)
  .animate({opacity:"1"}, 1000)
  .animate({opacity:"0.4"}, 500)
  .animate({opacity:"1"}, 1000);  
  };

function cir(){
  $("#divv").animate({borderRadius:"30px"}, 1000)
  .animate({borderRadius:"20px"}, 800)
  .animate({borderRadius:"50px"}, 600)
  .animate({borderRadius:"40px"}, 500)
  .animate({borderRadius:"100px"}, 1000);  
  };

function siz(){
  $("#divv").animate({width:"150px"}, 1000)
  .animate({height:"150px"}, 800)
  .animate({width:"50px"}, 1000)
  .animate({height:"20px"}, 800)
  .animate({width:"102px"}, 1000)
  .animate({height:"110px"}, 800)
  .animate({width:"88px"}, 1000)
  .animate({height:"80px"}, 800)
  .animate({width:"10x"}, 1000)
  .animate({height:"200px"}, 800)
  .animate({width:"200px"}, 1000); 
  };

function craz(){
  $("#divv").animate({left:"-=500px",top:"+=500px"}, 500);
  $("#divv").animate({left:"+=500px",top:"-=500px"}, 500);
  $("#divv").animate({width:"150px"}, 1000)
  .animate({height:"20px"}, 800);
  $("#divv").animate({borderRadius:"30px"}, 1000)
  .animate({borderRadius:"20px"}, 800);
  $("#divv").animate({opacity:"0.2"}, 1000)
  .animate({opacity:"1"}, 500);
  $("#divv").animate({left:"-=500px"}, 3000);
  $("#divv").animate({top:"-=100px"}, 1000);
  $("#divv").animate({left:"+=100px",top:"-=100px"}, 500);
  };
