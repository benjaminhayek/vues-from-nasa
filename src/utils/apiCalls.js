import { key } from '../utils/apiKey';
import { mockAPOD } from '../utils/mockAPOD'

export const fetchAPOD = async (url) => {
  try {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
    const data = await response.json()
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
    return mockAPOD
  }
}