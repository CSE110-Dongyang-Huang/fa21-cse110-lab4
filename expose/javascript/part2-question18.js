let d = new Date();
let time = d.toLocaleTimeString();
var intervalID = setInterval(function() { console.log(time); }, 1000);