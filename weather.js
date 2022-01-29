const cityForm = document.querySelector('form');
const card= document.querySelector('.card');
const details = document.querySelector('.details');
const time  = document.querySelector('.time');
 const icon = document.querySelector('.icon img');
const updateUi = (data) =>{
      console.log(data);
      const cityDetails = data.cityDetails;
      const weather = data.weather;

      //updating details in template
      details.innerHTML =`  
       <h5 class="my-3">${cityDetails.EnglishName} </h5>
      <div class="my-3">${weather.WeatherText}</div>
      <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
        </div>
        `; 
        //setting the icon
        const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
        icon.setAttribute('src', iconSrc);
  
    //updating the night and day & icons
    let timeSrc = 'grace';
    if(weather.IsDayTime){
        timeSrc='img/day.svg';
    }else{
        timeSrc = 'img/night.svg';
    }
  time.setAttribute('src', timeSrc);

        // removing the card
        if(card.classList.contains('d-none')){
            card.classList.remove('d-none');
        }
}

const updateCity = async (city) =>{
     const cityDetails = await getCity(city);
     const weather = await getWeather(cityDetails.Key);

     //returning the vaues in a object
     return{
         cityDetails,
         weather
     };
};

cityForm.addEventListener('submit' , (e) =>{
    // preventing default
    e.preventDefault();
    
    //getting cityvalue
 const  city = cityForm.city.value.trim();
  cityForm.reset();

  //udpating with the new city
  updateCity(city)
  .then((data) =>{updateUi(data)})
  .catch((err) => {console.log(err);});
});