import { mockDailys } from '../utils/mockDailys';

// export const fetchAPOD = async (date) => {
//   try {
//     const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&date=${date}`)
//     const data = await response.json()
//     return data
//   } catch (error) {
//     throw new Error(error)
//   }
// }

export const fetchAPOD = (date) => {
    let day = date
    let allPics = [];
    let formatted = day.slice(8,10) -1
    allPics.push(mockDailys[formatted])
    return allPics
}

export const fetchAPODS = (date) => {
    let formatted = date.slice(8,10) -1
    let allPics = [];
    let i = 0;
    while(i <= formatted){
        allPics.push(mockDailys[formatted])
        formatted--
    }
    console.log(allPics)
    return allPics
}