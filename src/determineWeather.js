export default function(name, description){
    let weathers = [/clouds/i,/clear/i,/drizzle/i];

    weathers.forEach(weather => {
        if(weather.test(name)){
            console.log(name)
        }
    })

}