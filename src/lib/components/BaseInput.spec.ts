import { render } from '@testing-library/vue'
import BaseInput from './BaseInput.vue'

const renderComponent = ({ props = {} }) => render(BaseInput, { props })


describe('Given BaseInput component', () => {
    describe('When is rendered', () => {
        it('Should render the component', () => {
            const { getByTestId } = renderComponent({})

            expect(getByTestId('base-input')).toBeTruthy()
        })
    })
})