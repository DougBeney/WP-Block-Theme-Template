<?php
/*
 * Plugin Name: Dougie WP Block Theme Plugin
 */

add_action('init', 'coolio_register_block');
function coolio_register_block() {
	function regBlock($name) {
		return register_block_type( __DIR__ . '/build/' . $name );
	}
	/* regBlock('youtube-lazyload'); */
	/* regBlock('navigation'); */
}
