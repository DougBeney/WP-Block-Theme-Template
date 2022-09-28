import { __ } from '@wordpress/i18n';
import {registerBlockType} from '@wordpress/blocks'
import { InnerBlocks, useBlockProps, InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { TextControl, Button, ColorPicker } from '@wordpress/components';

import './editor.scss'
import './style.scss'

function nav(atts, innerblocks) {
	return (
		<nav className="main-nav" id="main-nav">
			<div className="logo">
				<a href="/" aria-label="Go to the homepage">
					<img alt="" src={atts.logo} />
				</a>
			</div>

			<button id="main-nav-hamburger" class="hamburger" name="Show/hide main menu" aria-label="Show/hide main menu">
				<svg viewBox="0 0 100 60" width="40" height="40">
					<rect width="100" height="5"></rect>
					<rect y="30" width="100" height="5"></rect>
					<rect y="60" width="100" height="5"></rect>
				</svg>
			</button>

			<div class="menu-items">
				{innerblocks}
			</div>
		</nav>
	)
}

registerBlockType('mtma/nav', {
	attributes: {
		logo: { type: 'string' }
	},
	edit: function( { attributes, setAttributes } ) {
		const blockProps = useBlockProps()
		return (
			<header { ...useBlockProps() }>
				<InspectorControls>
					<div style={{margin: "10px"}}>
						<h2>Logo:</h2>
						<MediaUpload
							onSelect={ ( media ) => setAttributes( {logo: media.url} ) }
							allowedTypes={ ['image'] }
							value={ attributes.logo }
							render={ ( { open } ) => (
								<Button onClick={ open }>Select Logo</Button>
							) }
						/>
					</div>
				</InspectorControls>

				{ nav(attributes, <InnerBlocks></InnerBlocks>) }
			</header>
		)
	},
	save: function({attributes}) {
		const blockProps = useBlockProps.save()
		return (
			<header { ...blockProps }>
				{ nav(attributes, <InnerBlocks.Content></InnerBlocks.Content>) }
			</header>
		)
	}
})
