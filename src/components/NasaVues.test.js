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
  });