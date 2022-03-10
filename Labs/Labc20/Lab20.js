function calculate(){
  var bdate=document.ageform.age.value;
  console.log(bdate);
  var future_age=(2026-bdate)
  console.log(future_age);
  document.getElementById("ftage").innerHTML="You will be "+future_age+"!";
}
