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

    // it('calls the correct function on click', () => {
    //     const fetchAllDaysOfMonth = jest.fn();
    //     const button = wrapper.find('.top-btn')
    //     button.trigger('click')
    //     expect(fetchAllDaysOfMonth).toBeCalledTimes(1)
    // })

  });