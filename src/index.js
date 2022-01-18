import createAppendChild from "./createAppendChild";
import moment from "moment";

const weatherModule = (() => {
    //INIT: API CALL
    const search = async(search='Brisbane') => {
        try{
            let fetching = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=ff71f5f04b4f0fca53bfdce95b8318ee`,{mode:'cors'});

            let response = await fetching.then(response => response.json())
            const parsedInfo = parseInfo(response);
            return render(parsedInfo);
            
        } catch (err) {
            return render({'location':'Sorry, your search returned no results.'})
        }
    }
    search();

    //EVENT LISTENERS
    form.addEventListener('submit', (event) => {handleForm(event, form)});
    temp.addEventListener('click', () => {checkValue(temp)})

    //RENDER
    const render = (info) => {
        while (main.firstChild) {
            main.removeChild(main.lastChild);
          }

        Object.keys(info).forEach(key => {
            if (key==='weather-icon'){
                getIcon(info[key]);
                dayNight(info[key][2]);
            } else if (key==='dayNight'){
                body.classList.remove();
                info[key] ? body.classList.add('night') : body.classList.add('day');
            } else createAppendChild('div',main,`${info[key]}`,null,`${key}`);
        })
    }

    //ADDITIONAL FUNCTIONS
    const handleForm = (event, form) => {
        event.preventDefault();
        search(form[0].value);
        form.reset();
    }

    const parseInfo = (info) => {
        console.clear();
        console.log(info)
        return {
            'location': `${info.name}, ${info.sys.country}`,
            'time' : `${getTime(info.timezone)}`,
            'weather-icon':info.weather[0].icon,
            'temperature': `${parseKelvins(info.main.temp)}${temp.value}`,
            'minMax' : `L: ${parseKelvins(info.main.temp_min)}°  H: ${parseKelvins(info.main.temp_max)}°`,
            'feelsLike' : `Feels like: ${parseKelvins(info.main.feels_like)}°`,
            'humidity' : `Humidity: ${info.main.humidity}%`,
        }
    }

    const parseKelvins = (item) => {
        if(temp.value=="°C"){
            return `${parseFloat(item - 275).toFixed(1)}`
        } else {
            return `${parseFloat((item - 273.15) * 9/5 + 32).toFixed(1)}`
        }
    };

    const checkValue = (btn) => {
        btn.value=="°C" ? btn.value = '°F' : btn.value="°C"
    }

    const getIcon = (val) => {
        let img = createAppendChild('img',main,null,null,'icon');
        img.src = `http://openweathermap.org/img/wn/${val}@2x.png`;
        return img
    }

    const getTime = (val) => {
        let timezone = val;  
        let minutes = timezone / 60;
        return moment().utcOffset(minutes).format("D/MM/YY: h:mm A")
    }

    const dayNight = (val) => {
        val==='n' ?
        body.style['background-image'] = `url('../src/img/landscape-1844231.png')` :
        body.style['background-image'] = `url('../src/img/landscape-1844229.png')`
    }

    //RETURN
    return {search}
})();
