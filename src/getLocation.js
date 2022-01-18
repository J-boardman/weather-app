export default async function(search){
        let fetching = fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=ff71f5f04b4f0fca53bfdce95b8318ee`);
        console.log('fetching');

        let fetched = await fetching;
        return await fetched.json();
}