import { render } from '@testing-library/vue';
import BaseSlider from './BaseSlider.vue';

const renderComponent = ({ props = {} }) => render(BaseSlider, { props });

describe('Given a BaseSlider component', () => {
	test('Then it displays label when passed as a prop', () => {
		const { getByText } = renderComponent({ props: { label: 'Test label' } });
		expect(getByText('Test label')).toBeTruthy();
	});
});
