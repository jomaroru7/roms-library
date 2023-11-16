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

if ( isset( $_POST['submit'] ) ) {
	include_once 'roms-library-refresh-roms.php';
}
?>
<div class="wrap">
	<h2><?php echo esc_html( get_admin_page_title() ); ?></h2>
	<?php settings_errors(); ?>
	<form action="" method="POST" enctype="multipart/form-data">
		<?php
		settings_fields( ROMS_LIBRARY_URI );
		do_settings_sections( ROMS_LIBRARY_URI );
		submit_button( __( 'Refresh roms', ROMS_LIBRARY_URI ) );
		?>
	</form>
</div>


<form action="<?php echo home_url() ?>/wp-json/roms/v1/refresh"></form>
