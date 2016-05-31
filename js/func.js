/*
 * @package  code-freeze
 */

/**
 * LICENSE
 * This file is part of Code Freeze.
 * 
 * Code Freeze is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * Code Freeze is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with Code Freeze.  If not, see <http://www.gnu.org/licenses/>.
 *
 * @package    code-freeze
 * @author     Daniel Jäger <mail@djaeger.info>
 * @copyright  Copyright 2016 Daniel Jäger
 * @license    http://www.gnu.org/licenses/gpl-3.0.txt GPL 3.0
 * @link       http://wordpress.org/extend/plugins/code-freeze/
 */

(function ($) {

    $.fn.filterByData = function (prop, val) {
        var $self = this;
        if (typeof val === 'undefined') {
            return $self.filter(
                function () { return typeof $(this).data(prop) !== 'undefined'; }
            );
        }
        return $self.filter(
            function () { return $(this).data(prop) == val; }
        );
    };

})(window.jQuery);

jQuery(document).ready(function($) {
	// set form elements to disabled
	$("#wpcontent :input").attr("disabled", true);
	$("#wpcontent select").attr("disabled", true);
	$("#wpcontent textarea").attr("disabled", true);
	
	// class removals
	$("#widget-list").children().removeClass();
	$(".widget").parent().removeClass();
	$(".menu-item-handle").removeClass();
	
	// hide elements that can't reliably be disabled
	var hide = [
		'.update-nag', 
		'#wp-admin-bar-updates',
		'#wp-admin-bar-new-content',
		'#wp-admin-bar-edit-profile',
		'#dashboard_recent_comments .row-actions',
		'#dashboard_recent_comments .subsubsub',
		'#the-comment-list .row-actions',
		'#the-list .row-actions',
		'.select-all',
		'.menu-item-bar .item-controls',
		'.widget-title-action',
		'#dashboard_plugins span',
		'#content-add_media',
		'#ed_toolbar',
		'#publishing-action',
		'.publishing-action',
		'#minor-publishing-actions',
		'#major-publishing-actions',
		'.misc-pub-section a',
		'#category-adder',
		'#link-post_tag',
		'#footer-upgrade',
		'.submit',
		'#submit',
		'.delete',
		'.save',
		'#save',
		'#upgrade',
		'.button',
		'.add-new-h2',
		'.plugin-update-tr',
		'.plugins .row-actions-visible',
		'.jetpack-message',
		'.theme-browser',
		'.theme-options',
		'.delete-theme',
		'#availablethemes .action-links',
		'.widget-control-actions',
		'#widgets-right',
		'#set-post-thumbnail',
		'.quicktags-toolbar',
		'.menu-delete',
		'.locations-row-links',
		'.manage-menus'
	];
	
	var i;
	for (i = 0; i < hide.length; ++i) {
		$(hide[i]).hide();
	}
	
	// enable export
	$('#export-filters :input').removeAttr('disabled');
	$('#export-filters p').show();
	$('#export-filters #submit').show();
	
	// do kindly allow this plugin to be deactivated by authorized persons
	$("#code-freeze.active td.plugin-title div.row-actions").show();
	// Since WP 4.2 we have to you the slug defined in a data attribute to find the correct row-actions
	$('tr.active').filterByData('slug','code-freeze').find("td.plugin-title div.row-actions").show();
	
});
