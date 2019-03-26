document.getElementById('main').innerHTML = "This was rendered by JS..."

let i = 0;

setInterval(() => {
  i += 1;
  document.getElementById('main').innerHTML = `This was rendered by JS... ${i}`;
}, 1000)
