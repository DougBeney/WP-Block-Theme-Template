import { registerBlockType } from '@wordpress/blocks'
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

import './style.sass'
import './editor.sass'

registerBlockType('mtma/demoblock', {
	attributes: {
		message: { type: 'string', default: '' }
	},
	edit: function( { attributes, setAttributes } ) {
		const blockProps = useBlockProps()
		return (
			<div { ...blockProps } >
				<p>Your contnet</p>
				<InnerBlocks></InnerBlocks>
			</div>
		)
	},
	save: function({attributes}) {
		const blockProps = useBlockProps.save()




		return
		<div { ...blockProps } >
			<p>test</p>
			<InnerBlocks.Content></InnerBlocks.Content>
		</div>
	}
})
