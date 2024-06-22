import axios from 'axios';

export const fetchData = async () => {
    const response = await axios.get('https://api.open-meteo.com/v1/forecast?latitude=35&longitude=139&hourly=temperature_2m');
    return response.data.hourly.temperature_2m;
};
