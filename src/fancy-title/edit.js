import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { text } = attributes;

	function handleChange(text) {
		setAttributes({ text });
	}

	return (
		<RichText
			{...useBlockProps()}
			onChange={handleChange}
			value={text}
			placeholder={__("type here a title", "fancy-title")}
			tagName="h3"
			allowedFormats={["core/bold"]}
		/>
	);
}
