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