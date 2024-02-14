import { render } from '@testing-library/vue';
import BaseCheckbox from './BaseCheckbox.vue';

const renderWrapper = ({ props = {} }) => render(BaseCheckbox, { props });

describe('BaseCheckbox.vue', () => {
	it('renders props.label when passed', () => {
		const { getByText } = renderWrapper({
			props: {
				label: 'Test label',
			},
		});
		expect(getByText('Test label')).toBeTruthy();
	});
});
