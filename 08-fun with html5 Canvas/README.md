**The Canvas Element**
<canvas id= "draw" width = "800" height = "800"></canvas>
canvas is used to draw graphics into your webpage using javascript.

to get your canvas in javascript
var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d') //important

**Some canvas properties**
ctx.width = window.innerWidth //to set canvas width to window width
ctx.height = window.innerHeigt
ctx.strokeStyle ="#BADA55" sets the color to use can also be hsl or rgb
ctx.lineJoin = "round"; can be round, bevel or miter
ctx.lineWidth = 100; //for thickness of line

**Some canvas methods**
ctx.beginPath() starts a new path
ctx.moveTo(x,y) the starting point 
ctx.lineto() end point
ctx.stroke() activates the stroke


**To add event listeners on clicks**
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
  });
  
  
canvas.addEventListener("mousemove", draw);

canvas.addEventListener("mouseup", ()=> isDrawing = false)
canvas.addEventListener("mouseout", ()=> isDrawing = false)
