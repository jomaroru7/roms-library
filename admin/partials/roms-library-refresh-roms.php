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

    $request = new WP_REST_Request('GET', '/roms/v1/list');
    $response = rest_do_request($request);
    $roms_added = 0;
    if (!get_term_by('slug', 'gba', 'console')) {
        add_console('GBA', 'gba', 'GBA game');
    }

    if (!get_term_by('slug', 'nds', 'console')) {
        add_console('NDS', 'nds', 'NDS game');
    }

    foreach ($response->get_data() as [$drive_id, $rom_name, $rom_console]) {
        if (!is_rom_created($drive_id)) {
            $roms_added++;
            echo 'Rom ' . $rom_name . ' created with id: ' . add_rom($rom_name, $rom_name . ' game from ' . $rom_console, $rom_console, $drive_id) . '</br>';
        }
    }
    echo 'Added ' . $roms_added . ' roms';
    add_settings_error('roms_library_messages', 'roms_library_message', __('Roms refreshed', 'roms-library'), 'success');
} catch (WP_Error $error) {
    add_settings_error('roms_library_messages', 'roms_library_message', $error->get_error_message(), 'error');
}
