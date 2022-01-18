
export default function(info){
    
    let location = info.name;
    let timezone = info.timezone;
    let weather = {
        'name' : info.weather[0].main,
        'description' : info.weather[0].description
    }
    let main =  {
        'Temperature': `${parseFloat(info.main.temp - 275).toFixed(1)}°C`,
        'Feels like': `${parseFloat(info.main.feels_like - 275).toFixed(1)}°C`,
        'Min' : `${parseFloat(info.main.temp_min - 275).toFixed(1)}°C`,
        'Max' : `${parseFloat(info.main.temp_max - 275).toFixed(1)}°C`,
        'humidity' : `${info.main.humidity}%`,
    }
    let sys = {
        'Country' : info.sys.country,
        'Sunrise' : info.sys.sunrise,
        'Sunset' : info.sys.sunset
    }

    console.log(timezone)

    // Object.keys(info).forEach(key => {
    //     console.log(`%c${key}:`,'font-weight:bold');
    //     console.log(info[key])
    // });
}