// window.addEventListener("keyup", (e)=> console.log(e))
const  pressed = []
const secretCode = "leila"
window.addEventListener('keyup', (e) => {
    console.log(e.key);
    pressed.push(e.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    if (pressed.join('').includes(secretCode)) {
      console.log('DING DING!');
      alert("yayyy")
      cornify_add();
    }
    console.log(pressed);
});
