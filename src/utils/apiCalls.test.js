import * as API from '../utils/apiCalls';

describe('apiCalls', () => {
    it.skip('calls fetchAPOD with the correct params', () => {
        let date = '2019-01-09'
        let formatted = date.slice(8,10) -1
        API.fetchAPOD(date)
        expect(API.fetchAPOD()).toBeCalled(formatted)
    })
    it('calls fetchMarsPics and returns correct data', () => {
        let mockData = [{"title": "Mars rover lookin around", "url": "http://mars.nasa.gov/mer/gallery/all/2/n/1900/2N295043846EFFB1DNP1979L0M1-BR.JPG"}, {"earth_date": "2009-05-09", "title": "How neat is Mars", "url": "http://mars.nasa.gov/mer/gallery/all/2/n/1900/2N295043846EFFB1DNP1979R0M1-BR.JPG"}, {"earth_date": "2009-05-09", "title": "Neat Mars things", "url": "http://mars.nasa.gov/mer/gallery/all/2/n/1900/2N295043924EFFB1DNP1979L0M1-BR.JPG"}, {"title": "It sure is desolate", "url": "http://mars.nasa.gov/mer/gallery/all/2/n/1900/2N295043924EFFB1DNP1979R0M1-BR.JPG"}]
        API.fetchMarsPics()
        expect(API.fetchMarsPics()).toEqual(mockData)
    })
})
