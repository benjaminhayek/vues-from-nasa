import { shallowMount } from '@vue/test-utils'
import NasaVues from '../components/NasaVues.vue'

const factory = (values = {}) => {
  return shallowMount(NasaVues, {
    data: { ...values  }
  })
}

describe('NasaVues', () => {
  it('renders a empty array', () => {
    const wrapper = factory()

    expect(wrapper.find('.apods')).toEqual({"selector": ".apods"})
  })
})