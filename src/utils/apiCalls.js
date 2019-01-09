import { mockDailys } from '../utils/mockDailys';
import { mockRover } from '../utils/mockRover';

// export const fetchAPOD = async (date) => {
//   try {
//     const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&date=${date}`)
//     const data = await response.json()
//     return data
//   } catch (error) {
//     throw new Error(error)
//   }
// }

// export const fetchAPODS = async (date) => {
//   try {
      // let results = []
      // let currDay = date.slice(8, 10)
      // let currMonth = date.slice(5, 7)
      // let currYear = date.slice(0, 4)
      // let i = 0
      // while (i < currDay){
      //   let eachDay = `${currYear}-${currMonth}-${currDay}`
      //   currDay--
      //   let addZero = eachDay.split("")
      //   if(addZero.length < 10) {
      //     currDay = `0${currDay}`
      //   }
//     const dailyPics = results.push(fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&date=${eachDay}`).then(response => response.json()))
//     return Promise.all(results)
//   } catch (error) {
//     throw new Error(error)
//   }
// }

// export const fetchMarsPics = async () => {
//   try {
//     const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${key}`)
//     const data = await response.json()
//     return data
//   } catch (error) {
//     throw new Error(error)
//   }
// }

export const fetchAPOD = (date) => {
    let allPics = [];
    let formatted = date.slice(8,10) -1
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
    return allPics
}

export const fetchMarsPics = () => {
    return mockRover
}