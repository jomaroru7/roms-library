<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       https://jomaroru.es
 * @since      1.0.0
 *
 * @package    Roms_Library
 * @subpackage Roms_Library/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    Roms_Library
 * @subpackage Roms_Library/public
 * @author     Chema <jomaroru7@gmail.com>
 */
class Roms_Library_Public {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of the plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;
	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Roms_Library_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Roms_Library_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/roms-library-public.css', array(), $this->version, 'all' );
		$directory = plugin_dir_path(__FILE__) . 'front-roms-library/build/static/css';
		$pattern = '/main\.([a-f0-9]+)\.css$/';
		$filename= $this->get_filename_from_regex($directory, $pattern);
		wp_register_style('front-roms-library-css', plugin_dir_url(__FILE__) . 'front-roms-library/build/static/css/'.$filename, array(), '1.0', 'all');

	}

	/**
	 * Register the JavaScript for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Roms_Library_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Roms_Library_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/roms-library-public.js', array( 'jquery' ), $this->version, false );
		$directory = plugin_dir_path(__FILE__) . 'front-roms-library/build/static/js';
		$pattern = '/main\.([a-f0-9]+)\.js$/';
		$filename= $this->get_filename_from_regex($directory, $pattern);
		wp_register_script('front-roms-library', plugin_dir_url(__FILE__) . 'front-roms-library/build/static/js/'.$filename, array(), '1.0', true);
	}
	
	private function get_filename_from_regex($plugin_directory, $pattern) {
		$files = scandir($plugin_directory);
		foreach ($files as $file) {
			if (preg_match($pattern, $file, $matches)) {
				return $file;
			}
		}
	}
}
