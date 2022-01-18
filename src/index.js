import getLocation from "./getLocation";
import parseInfo from "./parseInfo";

const getInfo = async(search = 'Brisbane') => {
    const info = await getLocation(search);
    return parseInfo(info)
};

getInfo();