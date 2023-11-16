<?php
/**
 * Provide a admin area view for the plugin
 *
 * This file is used to markup the admin-facing aspects of the plugin.
 *
 * @link       https://www.jomaroru.es
 * @since      1.0.0
 *
 * @package    Roms_Library
 * @subpackage Roms_Library/admin/partials
 */

try {
    $api_url = home_url().'/wp-json/roms/v1/list';
    $response = wp_remote_get($api_url);
    var_dump($api_url);
    var_dump($response);
    add_settings_error( 'roms_library_messages', 'roms_library_message', __( 'Roms refreshed', 'roms-library' ), 'success' );
} catch ( WP_Error $error ) {
    add_settings_error( 'roms_library_messages', 'roms_library_message', $error->get_error_message(), 'error' );
}

