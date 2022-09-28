<?php

include 'inc/sane.php';

add_action( 'after_setup_theme', 'dougie_setup' );
if (!function_exists('dougie_setup')) {
	function mtma_setup() {
		add_theme_support('wp-block-styles');
		add_editor_style('editor-style.css');
		remove_theme_support( 'automatic-feed-links' );
        add_theme_support( 'align-wide' );
	}
}


add_action( 'after_setup_theme', 'dougie_editor_styles' );
function dougie_editor_styles() {
	add_theme_support( 'editor-styles' );
    add_editor_style( 'style.css' );
}

add_action( 'wp_enqueue_scripts', 'dougie_enqueue' );
function dougie_enqueue() {
	wp_enqueue_style( 'dougie', get_stylesheet_uri() );
}
