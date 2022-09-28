import { __ } from '@wordpress/i18n';
import {registerBlockType} from '@wordpress/blocks'
import { InnerBlocks, useBlockProps, InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { TextControl, Button, ColorPicker } from '@wordpress/components';

import './style.scss'

function youtubeEmbed(atts) {
	return (
		<div class="youtube-wrapper">
			<div class="youtube" data-embed={atts.video_id}>
				<div class="play-button"></div>
			</div>
		</div>
	)
}

registerBlockType('mtma/youtube-lazyload', {
	attributes: {
		video_id: { type: 'string' },
		thumbnail: { type: 'string' },
		backgroundColor: { type: 'string' }
	},
	edit: function( { attributes, setAttributes } ) {
		const blockProps = useBlockProps()
		return (
			<div { ...useBlockProps() }>
				<InspectorControls>
					<div style={{margin: "10px"}}>
						<p>YouTube Video ID:</p>
						<input type="text" placeholder="Enter video ID..." value={attributes.video_id} onChange={ (e) => setAttributes({video_id: e.target.value}) } />
					</div>
				</InspectorControls>
				{youtubeEmbed(attributes)}
			</div>

		)
	},
	save: function({attributes}) {
		const blockProps = useBlockProps.save()
		return (
			<div { ...blockProps }>
				{youtubeEmbed(attributes)}
			</div>
		)
	}
})
