const key = 	'nd04lE9sbWKvX00bQ55dvdlMK14un506';
//making an async code to return to  perform the task
//getting the weather 
const getWeather =   async (id) =>{
   const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
   const query = `${id}?apikey=${key}`;

   const response = await fetch( base + query);
   const data = await response.json();

   return data[0];
};
//getting the city
const getCity = async  (city) => {
     const baseUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search';
     const query  = `?apikey=${key}&q=${city}`;

     const response = await fetch(baseUrl + query);
     const data = await response.json();

     return data[0];
};

 // requset