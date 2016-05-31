/*
 * @package  code-freeze
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
