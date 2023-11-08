<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://jomaroru.es
 * @since             1.0.0
 * @package           Roms_Library
 *
 * @wordpress-plugin
 * Plugin Name:       roms library
 * Plugin URI:        https://jomaroru.es
 * Description:       Library for roms
 * Version:           1.0.0
 * Author:            Chema
 * Author URI:        https://jomaroru.es/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       roms-library
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define( 'ROMS_LIBRARY_VERSION', '1.0.0' );

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-roms-library-activator.php
 */
function activate_roms_library() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-roms-library-activator.php';
	Roms_Library_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-roms-library-deactivator.php
 */
function deactivate_roms_library() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-roms-library-deactivator.php';
	Roms_Library_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_roms_library' );
register_deactivation_hook( __FILE__, 'deactivate_roms_library' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-roms-library.php';

// Register the custom post type "rom"
function register_custom_post_type_rom() {
    $args = array(
        'public' => true, // If you want it to be public
        'label'  => 'ROMs', // Plural label
        'supports' => array('title', 'editor', 'thumbnail'), // Supported fields
        'taxonomies' => array('category', 'post_tag'), // Associated taxonomies
    );
    register_post_type('rom', $args);
}
add_action('init', 'register_custom_post_type_rom');


/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_roms_library() {

	$plugin = new Roms_Library();
	$plugin->run();

}
run_roms_library();
