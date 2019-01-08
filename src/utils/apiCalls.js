import { key } from '../utils/apiKey';
import { mockAPOD } from '../utils/mockAPOD'

export const fetchAPOD = async (date) => {
  try {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&date=${date}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.log('error')
    return mockAPOD
  }
}