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

require plugin_dir_path( __FILE__ ) .'vendor/autoload.php';

function load_react_app_shortcode() {
    wp_enqueue_script('front-roms-library');
    wp_enqueue_style('front-roms-library-css');
    ob_start();
    ?>
    <div id="front-roms-library-container"></div>

    <?php
    return ob_get_clean();
}
add_shortcode('front_roms_library_shortcode', 'load_react_app_shortcode');


// Register the custom post type "rom" with taxonomy "consola"
function register_custom_post_type_rom() {
    $labels = array(
        'name'              => _x('ROMs', 'post type general name'),
        'singular_name'     => _x('ROM', 'post type singular name'),
        'add_new'           => __('Add New'),
        'add_new_item'      => __('Add New ROM'),
        'edit_item'         => __('Edit ROM'),
        'new_item'          => __('New ROM'),
        'all_items'         => __('All ROMs'),
        'view_item'         => __('View ROM'),
        'search_items'      => __('Search ROMs'),
        'not_found'         => __('No ROMs found'),
        'not_found_in_trash'=> __('No ROMs found in the Trash'),
        'parent_item_colon' => '',
        'menu_name'         => 'ROMs'
    );
    
    $args = array(
        'labels'            => $labels,
        'public'            => true,
        'publicly_queryable'=> true,
        'show_ui'           => true,
        'show_in_menu'      => true,
        'query_var'         => true,
        'rewrite'           => array('slug' => 'rom'),
        'capability_type'   => 'post',
        'has_archive'       => true,
        'hierarchical'      => false,
        'menu_position'     => null,
        'supports'          => array('title', 'editor', 'thumbnail'),
        'taxonomies'        => array('console'), // Add the "consola" taxonomy
    );
    
    register_post_type('rom', $args);

    register_taxonomy('console', 'rom', array(
        'label' => 'Console',
        'hierarchical' => true,
        'public' => true,
        'show_ui' => true,
        'show_admin_column' => true,
        'query_var' => true,
        'rewrite' => array('slug' => 'console'),
    ));
}
add_action('init', 'register_custom_post_type_rom');

add_action( 'rest_api_init', function () {
    register_rest_route( 'roms/v1', '/list', array(
        'methods' => 'GET',
        'callback' => 'roms_list',
    ) );
} );

add_action( 'rest_api_init', function () {
    register_rest_route( 'roms/v1', '/refresh', array(
        'methods' => 'GET',
        'callback' => 'roms_refresh',
    ) );
} );

function roms_list(){
    $api = new RomsApi();
    $list = $api->list();
    $arrayRoms=[];
    foreach( $list as $key => $value ) {
        if ('application/vnd.google-apps.folder' !== $value->mimeType){
            array_push($arrayRoms, $value->name);
        }
    }
    return $arrayRoms;
}

function roms_refresh(){
    $api = new RomsApi();
    $list = $api->list();
    $arrayRoms=[];
    foreach( $list as $key => $value ) {
        if ('application/vnd.google-apps.folder' !== $value->mimeType){
            array_push($arrayRoms, $value->name);
        }
    }
    return $arrayRoms;
}


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
