board = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.fillStyle = '#607D8B';
ctx.fillRect(126, 0, 10, 400);
ctx.fillRect(262, 0, 10, 400);
ctx.fillRect(0, 126, 400, 10);
ctx.fillRect(0, 262, 400, 10);

function X () {
    ctx.beginPath();
    ctx.strokeStyle = '#F44336';
    ctx.lineWidth = 10;
    ctx.moveTo(15, 15);
    ctx.lineTo(110, 110);
    ctx.moveTo(109, 15);
    ctx.lineTo(15, 109);
    ctx.stroke();
}

function O () {
    ctx.beginPath();
    ctx.arc(62, 62, 49, 0, 2 * Math.PI, false);
    ctx.lineWidth = 10;
    ctx.strokeStyle = '#2196F3';
    ctx.stroke();
}
