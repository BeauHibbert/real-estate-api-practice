import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'



export const fetchApi = async(url) => {
  const { data } = await axios.get((url), {
    headers: {
      'X-RapidAPI-Key': '382ab520ddmshacf0c3e1cbc9f41p15bae3jsnc2ef4fd32fca',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
  })
}