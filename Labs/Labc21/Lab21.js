var ninja = {
  name: "Elrudo",
  likes: ["Fortnite", "Killing", "Sleeping"],
  belt: "Yellow",
  punch: function(){
    var numb = Math.floor(Math.random () * 100) + 1;
    for (var i = 0; i<= numb; i++) {
    document.getElementById("actionText").innerHTML="POOOWW, This Ninja Punched You " +i + " Times!";
    document.getElementById("OOF").play();}
  },
  kick: function(){
    var numb = Math.floor(Math.random() * 100) + 1;
    for (var i = 0; i<= numb; i++) {
    document.getElementById("actionText").innerHTML="BAAMM, This Ninja Kicked You " +i + " Times!";
    document.getElementById("OOF").play();}
  },
  Dodge: function(){
    document.getElementById("actionText").innerHTML="SWWWOOOSSHHH, you just dodged an attack!";
    document.getElementById("swoosh").play();
  },
};