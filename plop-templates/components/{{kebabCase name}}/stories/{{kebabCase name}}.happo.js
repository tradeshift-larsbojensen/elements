import { storiesOf } from '@open-wc/demoing-storybook';
import '@tradeshift/elements';
import '@tradeshift/elements.{{kebabCase name}}';

import { createHappoStories } from '../../../../.storybook-happo/utils';


storiesOf('ts-{{kebabCase name}}', module).add('test', () => {
	const properties = {
		dir: { 'rtl': 'rtl' },
		disabled: { true: true },
		size: sizes
	};

	const options = {
		columns: 5,
		persistent_props: {
			errorMessage: 'Failed message',
		}
	};

	return createHappoStories('{{kebabCase name}}', properties, '', options);
});
