import createAppendChild from "./createAppendChild";
import determineWeather from "./determineWeather";

const weatherModule = (() => {
    //INIT: API CALL
    const search = async(search='Brisbane') => {
        try{
            let fetching = fetch(`//api.openweathermap.org/data/2.5/weather?q=${search}&APPID=ff71f5f04b4f0fca53bfdce95b8318ee`,{mode:'cors'});
            
            let response = await fetching.then(response => response.json())
            
            const parsedInfo = parseInfo(response);
            
            return render(parsedInfo);
            
        } catch (err) {
            return console.log(err)
        }
    }
    search();

    //EVENT LISTENERS
    form.addEventListener('submit', (event) => {
        handleForm(event, form)
    });

    //RENDER
    const render = (info) => {
        while (main.firstChild) {
            main.removeChild(main.lastChild);
          }
        Object.keys(info).forEach(key => {
            createAppendChild('div',main,`${info[key]}`,null,`${key}`);
        })
        console.log(info)
    }

    //ADDITIONAL FUNCTIONS
    const handleForm = (event, form) => {
        event.preventDefault();
        console.clear();
        search(form[0].value);
        form.reset();
    }

    const parseInfo = (info) => {
        let information = {
            'location': `${info.name}, ${info.sys.country}`,
            'temperature': parseKelvins(info.main.temp),
            'weather': info.weather[0].description,
            'minMax' : `Min: ${parseKelvins(info.main.temp_min)}  Max: ${parseKelvins(info.main.temp_max)}`,
            'humidity' : `Humidity: ${info.main.humidity}%`,
        }
        determineWeather(info.weather[0].main, info.weather[0].description);
        return information
    }

    const parseKelvins = (item) => {
        return `${parseFloat(item - 275).toFixed(1)}°`
    };

    //RETURN
    return {search}
})();
