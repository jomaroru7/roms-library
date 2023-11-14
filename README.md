=== Plugin Name ===
Contributors: jomaroru
Tags: comments, spam
Requires at least: 3.0.1
Tested up to: 3.4
Stable tag: 4.3
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

WordPress plugin for manage a Google Drive rom repository.

== Description ==

With this plugin you can list, add, delete and show your roms in Google Drive. 

This will have a frontal in React to do these jobs.

For access to wordpress api, you can do it from the path /wp-json/roms/v1/{function}


== Dependencies ==

- Composer.

- Google Api Client https://github.com/googleapis/google-api-php-client/blob/main/.

- Plugin Advanced Custom Fields" (ACF). 


== Installation ==

- Download the plugin.

- Install composer if you have not installed it before https://getcomposer.org/download/.

- Execute `composer install`.

- Configure ACF fields (you can import from imports/acf-fields.json).
