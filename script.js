const canvas = document.getElementById('myCanvas');
canvas.style.backgroundColor = '#000000';
const ctx = canvas.getContext('2d');

ctx.strokeStyle = '#00FF00';
ctx.lineWidth = 0.25;
ctx.fillStyle = '#009900';


// Generate grid system
for(let x = 0; x < canvas.width; x += 10){
    ctx.beginPath(); // Clear previous records
    ctx.moveTo(x, 0); // Start
    ctx.lineTo(x, canvas.height); // Create a line that occupies the full height of the canvas
    
    // Create a wider line every 50 pixels
    ctx.lineWidth = (x % 50 == 0) ? 0.5 : 0.25 ;
    ctx.stroke(); // Draw
    if(x % 50 == 0) ctx.fillText(x, x, 10) // Create a text in canvas (text, position)
}

for(let y = 0; y < canvas.height; y += 10){
    ctx.beginPath(); 
    ctx.moveTo(0, y); 
    ctx.lineTo(canvas.width, y); 
    
    ctx.lineWidth = (y % 50 == 0) ? 0.5 : 0.25 ;
    ctx.stroke(); 
    if(y % 50 == 0) ctx.fillText(y, 0, y + 10) 

}


// Example draw shape and text
ctx.beginPath();
ctx.strokeStyle = '#FFFFFF';
ctx.lineWidth = 2;
ctx.moveTo(50, 50);
drawCoordinate(ctx, 50, 50);

ctx.lineTo(150, 250);
drawCoordinate(ctx, 150, 250);

ctx.lineTo(250, 170);
drawCoordinate(ctx, 250, 170);
// ctx.lineTo(50, 50); // Replaced by closePath()
ctx.closePath(); // Conecta first dot with the last dot
ctx.stroke();

function drawCoordinate(ctx, x, y){
    ctx.fillStyle = '#00FF00';
    ctx.fillText(`(${x} ,${y})`, x, y)
}