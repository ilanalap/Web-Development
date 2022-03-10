function operations(){
  var r, h, v
  var r = prompt("Enter the radius of the cylinder in 'cm'");
  var h = prompt("Enter the height of the cylinder in 'cm'");
  var v = (3.14*(r**2)*h);
  console.log(v);
  document.getElementById("input1").innerHTML="<big>V=π*r^2*h</big>";
  document.getElementById("input2").innerHTML="<big>The volume of the cylinder is </big>"+v+"<big>!</big>";
}
