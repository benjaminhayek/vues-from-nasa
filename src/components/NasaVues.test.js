import { shallowMount } from '@vue/test-utils'
import NasaVues from '../components/NasaVues.vue'

describe('NasaVues', () => {
    let wrapper;
  
    beforeEach(() => {
      wrapper = shallowMount(NasaVues);
      const vm = wrapper.vm
    });
  
    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('renders a selector apods', () => {    
        expect(wrapper.find('.apods')).toEqual({"selector": ".apods"})
    })

    it('calls fetchAllDaysOfTheMonth on click', () => {
        let mockFunc = jest.fn();
        wrapper.setMethods({ fetchAllDaysOfMonth: mockFunc });

        const button = wrapper.find(".CMP-btn").trigger("click");
        expect(mockFunc).toBeCalled();
    })

    it('calls fetchAllDaysOfTheMonth on click', () => {
        let mockFunc = jest.fn();
        wrapper.setMethods({ fetchMarsRoverPics: mockFunc });

        const button = wrapper.find(".mars-btn").trigger("click");
        expect(mockFunc).toBeCalled();
    })

    it.skip('calls fetchTodaysPic on click', () => {
        let mockFunc = jest.fn();
        wrapper.setMethods({ fetchTodaysPic: mockFunc });

        const button = wrapper.find(".back").trigger("click");
        expect(mockFunc).toBeCalled();
    })

  });