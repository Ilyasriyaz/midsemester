function togglelights(){
    const red = document.getElementById(`red`);
    const yellow = document.getElementById(`yellow`);
    const green = document.getElementById(`green`);

    if (red.style.backgroundColor == `white`){
        red.style.backgroundColor = `red`;
    }else{
        red.style.backgroundColor = `white`
    }
}

setInterval(togglelights, 2000);