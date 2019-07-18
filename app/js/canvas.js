var color1 = "#19BD9A";
var color2 = "#047378";
var textColor = "#81868e";
var font = "400 25px OpenSans";
var lineWidth1 = 3;
var lineWidth2 = 5;
var circleCenter = 80;
var circleRadius = 60;

//random от pi до 2pi
function random() {
    return Math.random() * (Math.PI * 1.9 - Math.PI* 1.1) + Math.PI*1.1;
}

//Правильное округление
function myFloor(per) {
    if (per - Math.floor(per) >= 0.5) {
        return Math.floor(per) + 1;
    } else {
        return Math.floor(per);
    }
}
//canvas barchart
function draw() {
    var canva = document.getElementById('canv')
    if (canva.getContext) {
        var context = canva.getContext('2d');
        for (var i = 0; i < 3; i++) {
            var start = 0;
            var Pi_2 = Math.PI * 2;
            var end = random();
            var percent = (end) / Pi_2 * 100;
            var text = myFloor(percent) + " %";
            //darkGreen
            context.beginPath();
            context.lineWidth = lineWidth1;
            context.arc((2 * i + 1) * circleCenter, circleCenter, circleRadius, start, end, true);
            context.strokeStyle = color2;
            context.lineCap = "butt";
            context.stroke();
            //lightGreen
            context.beginPath();
            context.lineWidth = lineWidth2;
            context.arc((2 * i + 1) * circleCenter, circleCenter, circleRadius, start, end, false);
            context.strokeStyle = color1;
            context.lineCap = "round";
            context.fillStyle = textColor;
            context.font = font;
            context.fillText(text, circleCenter - 20 + 2 * i * circleCenter, circleCenter + 8);
            context.stroke();
        }
    }
}

window.requestAnimationFrame(draw);
