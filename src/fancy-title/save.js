import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	return (
		<p { ...useBlockProps.save() }>
			{ 'Fancy Title – hello from the saved content!' }
		</p>
	);
}
