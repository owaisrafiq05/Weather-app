let city = document.getElementById('city');
let type = document.getElementById('type');
let temperature = document.getElementById('temp');
let image = document.getElementById('img');
let input = document.getElementById('input');

let API_Key = "58da050b5e6f2a8400f9b1013ebc6288";

const data = async (search) =>{
    let getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_Key}&units=metric`)
    console.log(getData)

    let jsonData = await getData.json();
    console.log(jsonData);


    if (jsonData.cod == 400) {
        image.src = "./images/error-404.png"
        city.innerHTML = "Please Enter a location"
        temperature.innerHTML = ""
        type.innerHTML = ""
    }else if (jsonData.cod == 404) {
        alert("Please Enter a valid location")
        image.src = "./images/error-404.png"
        city.innerHTML = search
        temperature.innerHTML = ""
        type.innerHTML = ""
    }else{
        city.innerHTML = jsonData.name
    temperature.innerHTML = Math.floor(jsonData.main.temp)+ "°C";
    type.innerHTML = jsonData.weather[0].main;
    }

    

    if (type.innerHTML == "Clouds") {
        image.src = "./images/cloudy.png";
    }
    else if(type.innerHTML == "Clear"){
        image.src = "./images/clear.png"
    }
    else if(type.innerHTML == "Rain"){
        image.src = "./images/rain.png"
    }
    else if(type.innerHTML == "Snow"){
        image.src = "./images/snow.png"
    }
    else if(type.innerHTML == "Haze"){
        image.src = "./images/haze.png"
    }
    else if(type.innerHTML == "Smoke"){
        image.src = "./images/smoke.png"
    }
    else if(type.innerHTML == "Strom"){
        image.src = "./images/strom.png"
    }
    input.value = ""
}

const weatherFun = () =>{
    search = input.value;
    data(search)
}

