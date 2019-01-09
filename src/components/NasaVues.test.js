import { shallowMount } from '@vue/test-utils'
import NasaVues from '../components/NasaVues.vue'

describe('NasaVues', () => {
    let wrapper;
  
    beforeEach(() => {
      wrapper = shallowMount(NasaVues);
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

        wrapper.find(".CMP-btn").trigger("click");
        expect(mockFunc).toBeCalled();
    })

    it('calls fetchAllDaysOfTheMonth on click', () => {
        let mockFunc = jest.fn();
        wrapper.setMethods({ fetchMarsRoverPics: mockFunc });

        wrapper.find(".mars-btn").trigger("click");
        expect(mockFunc).toBeCalled();
    })

    it.skip('calls fetchTodaysPic on click', () => {
        let mockFunc = jest.fn();
        wrapper.setMethods({ fetchTodaysPic: mockFunc });

        wrapper.find(".back").trigger("click");
        expect(mockFunc).toBeCalled();
    })

    it.skip('calls fetchTodaysPic on mount', () => {
        let fetchTodaysPic = jest.fn();
        wrapper.setMethods({ mounted: fetchTodaysPic });
        wrapper.mounted();
        expect(mockFunc).toBeCalled();
    })

  });