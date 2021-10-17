const time=document.querySelector(".time span")

function now(){
    const timenow = new Date();
    const h = String(timenow.getHours()).padStart(2, "0");
    const m = timenow.getMinutes();
    const s = timenow.getSeconds();
    time.innerHTML = `${h}:${m}:${s}`
}

now();

setInterval(now, 1000)


const myApi = '31ad6b24e3c0b79223ea0d53286017e9'



function now(){
    const gettime = new Date();
    const h = String(gettime.getHours()).padStart(2,"0");
    const m = String(gettime.getMinutes()).padStart(2,"0");
    time.innerHTML = `${h} : ${m}`

}

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${myApi}`
    fetch(weatherUrl)
    .then(Response => Response.json())
    .then((data) => {
        const weatherbox = document.querySelector(".time span:nth-child(2)");
        
        weatherbox.innerHTML = data.weather[0].main;
 
         
    });
}



navigator.geolocation.getCurrentPosition(onGeoOk);




