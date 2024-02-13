import { render } from '@testing-library/vue';
import BaseTextarea from './BaseTextarea.vue';

const renderComponent = (props = {}) => render(BaseTextarea, { props });

describe('Given a BaseTextarea component', () => {
	test('Then it displays label when passed as a prop', async () => {
		const { getByText } = renderComponent({ label: 'Test label' });
		expect(getByText('Test label')).toBeTruthy();
	});
});
