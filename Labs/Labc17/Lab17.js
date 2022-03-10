alert("Hello Class");
document.write("In HTML, JavaScript programs are executed by the web browser.");
document.write("<h3>In HTML, JavaScript programs<br> are executed by the<br> web browser.</h3>");
document.write("Open the sources and console in the developer tools section of the browser to see what was done with JavaScript");

var x=5
var y=8
var z=x+y
console.log(x)
console.log(y)
console.log(z)

var fuzz=1
var clip=2
fuzz = 5
clip = fuzz + 2
fuzz = clip + 1
clip = "gr" + fuzz
fuzz = fuzz + 1
fuzz = fuzz + 1
fuzz = fuzz + 1
console.log(fuzz)
console.log(clip)

function myFunction(p1, p2){
  return p1 * p2;
}
x = myFunction(y,fuzz);
console.log(x)

function toCelsius(fahrenheit){
  return (5/9) * (fahrenheit-32);
}