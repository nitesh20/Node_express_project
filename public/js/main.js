const cityname = document.getElementById("city_name");
const cityerr = document.getElementById("cityerr");
const tempstatus = document.getElementById("tempstatus");
const temp = document.getElementById("temp");
const country = document.getElementById("country");
const icon = document.getElementById("icons");
const sbtn = document.getElementById("submitbtn");


const getinfo = async(e) => {
    e.preventDefault();
    var cname = cityname.value;

    if(cname == "")
    {
        cityerr.innerHTML = 'Plz Write the name before search !!';
    }else{
        try{
            var url = `https://api.openweathermap.org/data/2.5/weather?q=${cname}&units=metric&appid=c447c0a8b27e0d5a3977886979d90925`;
            const response = await fetch(url);
            const data = await response.json();
            const arrdata = [data];
            // console.log(response);
            country.innerHTML = `${arrdata[0].name}, ${arrdata[0].sys.country}`;
            temp.innerHTML = arrdata[0].main.temp + '&deg C';
            tempstatus.innerHTML = arrdata[0].weather[0].main;
            var wstatus = arrdata[0].weather[0].main;

            if(wstatus == "Sunny")
            {
              icon.innerHTML = "<i class='fas fa-sun fa-5x' style='color: #eccc68;'></i>";
            }
            else if(wstatus == "Clouds")
            {
              icon.innerHTML = "<i class='fas fa-cloud fa-5x' style='color: #f1f2f6;'></i>";
            }
            else if (wstatus == "Rainy")
            {
              icon.innerHTML = "<i class='fas fa-cloud-rain fa-5x' style='color: #a4b0be;'></i>";
            }
            else if (wstatus == "Haze")
            {
              icon.innerHTML = "<i class='fas fa-cloud-sun-rain fa-5x' style='color: #44c3de;'></i>";
            }
            else{
              icon.innerHTML = "<i class='fas fa-cloud fa-5x' style='color: #44c3de;'></i>";
            }
        }catch{
            cityerr.innerHTML = 'Plz Enter Currect City Name !!';
        }
        
    }

    
}
sbtn.addEventListener("click",getinfo);