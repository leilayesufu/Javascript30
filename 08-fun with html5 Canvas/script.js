const canvas =  document.querySelector(`canvas`);
const ctx =  canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
let direction = true;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;

function draw(e){
    if (!isDrawing) return;
    console.log(e)
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

    ctx.beginPath()
    //start from
    ctx.moveTo(lastX, lastY)
    //go to
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke()
    lastX = e.offsetX;
    lastY = e.offsetY;
    hue++;
    if(hue >= 360){
        hue = 0;
    }
    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction;
      }
    
      if(direction) {
        ctx.lineWidth++;
      } else {
        ctx.lineWidth--;
      }
    
    }


canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
  });
  
  
canvas.addEventListener("mousemove", draw);

canvas.addEventListener("mouseup", ()=> isDrawing = false)
canvas.addEventListener("mouseout", ()=> isDrawing = false)