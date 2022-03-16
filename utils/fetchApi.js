import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
    const { data } = await axios.get((url),
        {
            headers: {
                'x-rapidapi-host': 'bayut.p.rapidapi.com',
                'x-rapidapi-key': '3c808c5491mshc3d036f6b44d821p18a25ejsndb0ac94eb570'
            }
        });
    return data;
}