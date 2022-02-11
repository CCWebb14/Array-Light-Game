const lights = document.querySelectorAll('.light');
console.log(lights);

lights.forEach(light => light.addEventListener('click', switchLight));

function switchLight(e){
    this.classList.toggle('on');
}

switchLight