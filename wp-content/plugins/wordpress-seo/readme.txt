=== WordPress SEO by Yoast ===
Contributors: joostdevalk
Donate link: http://yoast.com/
Tags: seo, SEO, google, meta, meta description, search engine optimization, xml sitemaps, robots meta, rss footer, yahoo, bing, sitemaps, news sitemaps
Requires at least: 3.1
Tested up to: 3.2
Stable tag: 0.4.2

Yoast's all in one SEO solution for your WordPress blog: SEO titles, meta descriptions, XML sitemaps, breadcrumbs & much more.

== Description ==

The most complete all in one SEO solution for your WordPress blog, this plugin has a huge list of features, including:

* Post title and meta description meta box to change these on a per post basis for ultimate SEO.
* On page SEO Analysis using the Linkdex page analysis library.
* Taxonomy (tag, category & custom taxonomy) title and meta description support.
* Google search result snippet previews, let your editors improve your SEO!
* Focus keyword testing.
* Full page analysis functionality: see what you need to do to further SEO optimize your post content, page title, headings, images etc.
* Meta Robots configuration:
	* Easily add noodp, noydir meta tags.
	* Easily noindex, or nofollow pages, taxonomies or entire archives.
* Improved canonical support, adding canonical to taxonomy archives, single posts and pages and the front page.
* RSS footer / header configuration, improve your SEO by getting links from scrapers.
* Permalink clean ups, while still allowing for, for instance, Google Custom Search.
* Breadcrumbs support, with configurable breadcrumbs titles.
* The ultimate XML Sitemaps for your SEO with:
 	* Images.
	* Pages or posts that have been noindexed will not show in XML sitemap (but can if you want them too).
	* Custom post type and custom taxonomy support.
	* No static files are generated, so no delays when publishing posts.
* .htaccess and robots.txt editor.
* Basic import functionality for HeadSpace2 and All in One SEO.

== Installation ==

1. Upload the `wordress-seo` folder to the `/wp-content/plugins/` directory
1. Activate the WordPress SEO plugin through the 'Plugins' menu in WordPress
1. Configure the plugin by going to the `SEO` menu that appears in your admin menu

== Frequently Asked Questions ==

= The SEO title output for the plugin doesn't work as expected =

You've set up a template for your titles, but things get added to it when they're output? You can do two things: either enable "Force rewrite titles" on the SEO -> Titles settings page, or go into your header.php and change the title element to just this: 

`<title><?php wp_title(''); ?></title>`

= I'm not seeing a meta description in my `<head>` section? =

Check whether your theme's `header.php` file contains a call to [wp_head()](http://codex.wordpress.org/Function_Reference/wp_head).

= My meta descriptions aren't showing up in the search result pages =

There are two possible issues with a meta description:

1. You're putting out more than one of them due to multiple plugins adding a description, for instance the WordBooker plugin adds a description too but has an option to disable it, other SEO plugins running might be another cause.
1. You're not seeing your meta description show up in the search result pages. Google will not alway show your meta description, the likelihood of your meta description appearing in the search results increases incredibly when your meta description contains the sought for keyword though, which is why the focus keyword functionality checks for the appearance of the focus keyword in the description.

= Page X, Y, Z for plugin X doesn't work with your plugin enabled =

Disable the clean permalinks feature on the SEO -> Permalinks settings page.

= Why is WordPress SEO better than All In One SEO Pack? =

It's not a secret that the author of this plugin, Joost de Valk, aka Yoast, doesn't really like All In One SEO Pack. The main reason is that All in One SEO pack has a default option for auto generating meta descriptions that is actually making it harder for people to rank well in a lot of cases, giving them a false sense of security.

Once you'll start using this plugin, you won't ask that question anymore, you'll just ask yourself "why does anyone still use All In One SEO"? There's several things this plugin does better: it has a snippet preview in the write post screen that'll help you optimize your titles, meta descriptions and copy instantly while working on your posts and pages.

Also, other than All In One SEO Pack, this plugin has a completely working canonical implementation for all pages within your site, whereas the one in All In One SEO pack is broken, it was originally written by the author of this plugin, so he knows. It comes with XML Sitemaps, an XML News sitemap module, loads and loads of robots meta options and other options to improve your SEO.

== Screenshots ==

1. The WordPress SEO plugin general meta box. You'll see this on edit post pages, for posts, pages and custom post types.
2. The advanced section of the WordPress SEO meta box.
3. The WordPress SEO settings for a taxonomy.
4. The fully configurable XML sitemap for WordPress SEO.
5. Easily import SEO data from All In One SEO pack and HeadSpace2 SEO.
6. Example of the Linkdex Page Analysis functionality.

== Changelog ==

= 0.4.2 =

* Fixes:
	* XML Sitemaps:
		* Bug in redirection of www to non-www
		* Removed no longer needed robots_txt code.
		* Proper flushing of rewrites.
		* Fix for sites using index.php in permalinks.
		* Moved XML settings to its own options array, cleaning up the settings. This also allows you to save XML Sitemap settings again.
		* Sitemaps now contains all the last updated posts (under 1,000) of one post type in one new XML sitemap, so SE only has to crawl one sitemap per post type.
		* XML Sitemap Index file is now being pushed into cache if a caching plugin is active (by loading it through a cron job).
		* No longer breaks when `get_post_type_archive` doesn't exist.
	* Metaboxes / Edit Post:
		* Proper escaping of attribute values / already filled boxes.
		* Bug in bolding / keyword recognition JS code.
		* Background of tab content is now white again.
	* Taxonomies:
		* Fixed bug that could prevent noindex from showing up.
	* Other:
		* Admin menu works properly again and has XML Sitemaps menu added.

= 0.4.1 =

* Fixes bug in saving XML Sitemap and Dashboard settings.
* Forces flush of rewrite rules so XML sitemaps start working immediately after enabling.
* Adds a line of copy to the XML Sitemaps page to point the user at the index sitemap file.

= 0.4 =

* Fixes:
	* XML Sitemaps:
		* Complete rewrite of the XML Sitemap system, now using a sitemap index file and sitemap files per taxonomy and post type. Way more scaleable and awesome.
		* Updated the XSL to work with Sitemap Index file too.
		* Added functionality to remove old style & potential blocking XML sitemaps.
		* Removed all code that wrote files, as it's no longer needed.
		* Removed all functionality for updating sitemaps after publish, as it's no longer needed (search engines will still be pinged though).
	* Breadcrumbs:
	 	* Support for bbPress (the plugin), breadcrumbs.
		* Fixed bug with blog URL appearing for non-post post_types.
		* Fixed bug with post ancestors being in wrong order.
		* Removed erroneous var_dump.
	* Bug with title for homepage when using page as homepage.
	* OpenGraph:
		* Moved all OpenGraph code to specific OpenGraph class.
		* Added option to specify and add FB Page and App ID and FB admin ID or ID's.
	* Linkdex:
		* Fixed bug in detection of headings with an ID or other attribute.
	* Several performance optimizations to class includes.
	* Some fixes in JavaScript keyword detection and keyword bolding in snippet when using colon and semicolons etc in title or meta description.
	* Tiny CSS fixes so it all looks nice in WordPress 3.2.
	

* Also:
	* XML Sitemaps now have their own settings page.
	* Plugin version is now stored in the options for the plugin to allow easy upgrade.
	* Added the option to use custom fields in title and description templates. Use `%%cf_&lt;custom-field-name&gt;%%` and it'll be replaced with your custom field. So for instance %%cf_city%% when your custom field is named "city".
	* Removed some of the tabs and empty lines the plugin was outputting.
	* Added some filters:
		* `wpseo_sitemap_urlimages` so you can add images to the sitemap, found in inc/class-sitemaps.php
		* `wpseo_title` and `wpseo_metadesc` in frontend/class-frontend.php
		

= 0.3.5 =

* Fixes:
	* Issue in post / page editor with link dialog and other plugins using jQuery UI.
	* No longer uses Google JS API for jQuery UI, but just include jQuery UI autocomplete library and uses the rest from WP core.
	* No longer uses Google JS API for jQuery UI CSS, but included the needed classes in the plugins CSS files.
	* Properly update sitemap for custom post types on publication.
	* Fixed a notice in heading detection when no headings were found.
	* Fixed a typo in Linkdex messages.

= 0.3.4 =

* Fixes:
	* CSS issue caused by 0.3.3.
	* Some security issues, thanks Jon Cave and Andrew Nacin for pointing them out and helping to fix!
	
= 0.3.3 =

* Fixes:
	* CSS collisions due to too generic class names.
	* Issue with outbound link recognition caused in 0.3.2.
	* Improved first paragraph detection.
	* Word count is now correct for non western european languages too.
	* Keyword detection in content and first paragraph in Cyrillic, Russian and other languages.
	* Handling of UTF-8 slugs.
	* Proper detection of keywords underneath the focus keyword input field by using word boundaries.
	* Proper keyword bolding and counting in snippet preview for Cyrillic, Russian and other languages.
	* Proper counting of length of description and title for strings with accents or non-ASCII characters.
	* No longer calculating Flesch score for non-English, as it's not correct.
	* Related keywords button works again.
	* Several performance improvements to edit post page JavaScript.

* Also:
	* Notice now properly tells you to save as draft or update a post to see new Linkdex analysis. No, it's not going to be AJAX, ever, for performance reasons.
	
= 0.3.2 =

* Fixes:
	* Instant update of snippet preview now also works when editing post excerpt.
	* Bugs with non-ASCII characters in the focus keyword and keyword recognition.
	* Issues with themes using `cat` in search, most specifically the ClassiPress themes.
	* The snippet preview no longer crashes when you use "on", "strong" or any other term contained in "strong" in your focus keyword.
	* Made the Linkdex check for keyword in URL work in all occasions.
	* Notices on XML import.
	* Issue with title of blog page on paginated pages.

* Also:
	* Removed 3 no longer needed JavaScript files.
	* Added the new bug tracker to the plugins sidebar notice under support.
	* Canonical now has a filter (`wpseo_canonical`) so you can remove it or change it.
	
= 0.3.1 =

* Fixes:
	* Bug in meta box JS code causing annoying issues in Firefox and Internet Explorer.
	* Issue with outbound anchor text detection in Linkdex Page Analysis.
	* Small bug in detection of keyword in Title when keyword contained dashes or other non alphanumeric chars.

= 0.3 =

* Major new feature: Linkdex Page Analysis has been integrated into WordPress SEO.

* Other new features:
	* You can now noindex, follow all sub pages of archives, taxonomies and categories.
	
* Fixes / Updates:
	* Snippet will now use ellipsis when post title or meta description is too long.
	* Various JS optimizations in snippet preview generation.
	* Snippet length will once again correctly correct for date inclusion.
	* Date in snippet will be the current date when post is an unpublished draft.
	* Preventing some errors when there's no focus keyword.
	* Keyword detection in the URL now works correctly.
	* URLs are no longer (incorrectly) "shortened".
	* Fixed possible infinite loop in editor when adding focus keyword, which was causing FF crashes.
	* Fixed count of keyword in content by removing tags properly.
	* Fixed issues with HTML tags appearing in snippet inappropriately.
	* Switched Google Suggest autocompletion for focus keyword to use [Google Suggest jQuery](http://code.google.com/p/googlesuggest-jquery/).
	* No longer relies on `is_post_type_archive` to work, so compatible with WP 3.0 again.
	* On themes that badly include $post in the head a redirect no longer occurs if the last post was redirected.
	* SEO Settings menu in Admin Bar will no longer show for people that don't have the rights needed to use it.
	* No longer wrongly showing image for last post in OpenGraph when on front page.
	* No longer redirecting taxonomy feeds wrongly under some conditions with clean permalinks enabled.
	* Fixed wrong titles for feeds.

= 0.2.5.4 =

* Custom post type archives update:
	* You can now set a title, meta description and breadcrumbs title for custom post type archives on the Titles page
	* Custom post type archives now have a correct canonical
* Other fixes:
	* Fixed a notice for an uninitialized setting
	* Slightly changed the CSS for the admin area
	* Changed input fields for meta descriptions on titles page from text input to textarea
	* More preparations for allowing the plugin to be fully translated

= 0.2.5.3 =

* Bugs fixed:
	* `edit_posts` is not the same as `edit_post`, what a difference an s makes, thanks to nacin.
	* preview URLs now work again with clean permalinks on, but only for those with the actual rights to view them.
	* Fix for catchable fatal error in canonical function.
	* First stab at fix for errors with focus keyword check and keywords filled with HTML tags.
	* canonical links for paginated posts are now set correctly.
	* Issue where parent taxonomy items would display in the reverse order in breadcrumbs.
	* Improved error handling for non PHP 5.2+ installs and also made automatic deactivation work properly.

* Documentation fixes:
	* Added screenshot and a FAQ with several items to this plugin's page.

= 0.2.5.2 =

* This WordPress SEO plugin now officially requires PHP5. WordPress version 3.2 will also require it, so you'd better upgrade now. If you're on any version lower than PHP 5.2, this plugin will deactivate itself. You can then use SEO Data Transporter to migrate your data to another plugin, or you could do the more sensible thing and get your hosting upgraded to PHP 5.2 ASAP.

* Bugs fixed:
	* Attempted compatibility fix with other plugins that hook into robots.txt functionality.
	* Issue with not loading meta box for some custom post types.
	* Issue where SEO data for custom post types would not save.
	* Issue where post title in snippet preview would show %%sitename% instead of your site's name when no title template for post type was set.
	* Issue with removing tags when string was empty in JavaScript.
	* Hiding the post_format taxonomy on the right places.
	* Should now work better with crappy themes that do weird things in header.php.
	
* Design fixes:
	* Updated tabs in meta boxes to reflect Core UI, for more info see [this post](http://developersmind.com/tabbed-meta-box-in-wordpress/) by Pete Mall.
	
* Enhancements:
	* Now using plugin version number to enqueue files so browser cache isn't in the way when upgrading.
	* Loading scripts in footer now when possible.

= 0.2.5.1 =

* Security fixes:
	* Added nonces for security to htaccess and robots.txt file editing to prevent possible CSRF.

* Bugs fixed:
	* Prevent JS error when WordPress SEO Meta box was hidden on edit pages.
	* Fix for title in snippet preview not showing when no title template was set for the post type.
	* Fix for focus keyword count, would give wrong return on slugs that were too long.
	* Removed post_format from list of taxonomies you can edit title and meta desc template for as it's of no use.
	* Removed post_format from list of taxonomies to exclude for XML Sitemap, it was already excluded by default.

* New features:
	* Option to disable WordPress SEO meta data box on (custom) taxonomies.
	
= 0.2.5 =

* Bugs fixed:
	* Snippet preview quicker than ever and it no longer blows up some browsers: all AJAX calls have been removed and the entire process is done with JavaScript within the browser.
	
* Feature enhancements:
	* The meta box on the edit posts page now features tabs, thanks to Pete Mall (even works nicely in the blue theme).
	* Advanced features moved to their own tab instead of button.
	* Focus keyword now shown straight below snippet preview.
	
* Other news: The Google News module almost ready for mass-deployment. Stay tuned.
	
= 0.2.3.4 =

* Added WPML config file, so you can SEO in multiple languages.

= 0.2.3.3 =

* Bugs fixed:
	* Comma in priority in sitemap which should be dot. I hate European servers.
	* Fixed a notice in generating a path to the wpseo directory in the uploads dir.
	* Fixed a rather annoying XML Sitemap date issue, props to [Staze in wp.org forums](http://wordpress.org/support/topic/plugin-wordpress-seo-by-yoast-sitemapxml-wrong-date-for-blog?replies=8).
	
* Feature enhancement:
	* Breadcrumbs now output links to post type archives too.
	
= 0.2.3.2 =

* Bugs fixed:
	* Fixed race condition where sitemap wouldn't load sometimes.
	* ... in snippet preview are now bold as they should be.
	* Desc and Title in snippet preview should now update less frequently to prevent crashing low mem browsers.
	
= 0.2.3.1 =

* Bugs fixed:
	* Error in saving certain data when it was a checkbox.
	* Fixed notice for non-existing title and for empty metakey.
	* Fix for an error that could occur when the post thumbnail functionality is not active.
* Changes:
	* Added page numbers to default titles for taxonomies and archives.
	
= 0.2.3 =

* New features:
	* First stab at (Facebook) OpenGraph implementation.
	* Meta Description can now be returned, using `$wpseo_front->metadesc( false );` for use elsewhere.
	* Plugins can now register their own variables to not be cleaned out when permalink redirect is enabled.
	
* Bugs fixed:
	* Deleting the dashboard widget will now really delete it.
	* Some fixes for notices.
	* Strip tags out of titles.
	* Use blog charset for XML Sitemap instead of UTF-8.
	* Import of Meta Keywords fixed.
	* Small fix for possible error in AJAX routines.
	* Breadcrumb now actually returns when you ask it to.
	* Fixed some errors in JavaScript of title generation within snippet preview.
	* Removed SEO title from post edit overview as you couldn't edit it there anyway.
	
* Documentation fixes:
	* Added an extra notice to clean permalink to let people know they're playing with fire.
	* Small improvement to error handling for upload path.
	
= 0.2.2 =

* Bugs fixed:
	* Disabling sitemaps now properly does what it says on the tin: disable sitemaps.
	* Properly return title for homepage in rare instances where `is_home` returns true for front page even when front page is set to static page (yes, that's a WordPress bug I had to work around).
	* An empty title separator will now be changed to ' - ' so titles don't get all borked.
	* Several fixes in rewrites for MultiSite instances.
	* Option to force http or https on canonical URLs.
	* Several other bugfixes.
	
= 0.2.1 =

* Bugs fixed:
	* Plugin frontend URL should now be properly defined for sites with https admin.
	* Manually entered category title now actually works.
	* Import now works properly again for HeadSpace and AIOSEO, even for meta keywords.
	* Fixed typo in *wpseo-functions.php*, apparently `udpate_option` is not the same as `update_option`.
	* Fixed a notice about date snippet.
	* Fixed a notice about empty canonical.
	* Prevent cleaning out the WP Subscription managers interface for everyone.
	* Meta keywords are now properly comma separated.
	* Year archives now give proper breadcrumb.
	* Nofollowed meta widget actually works now.
	* %%date%% replacement in templates improved significantly.
	* Shortcodes stripped out in generation of title & description templates.

* Changes:
	* Moved all rewrites to their own class, *inc/class-rewrite.php*.
	* Further improved error handling when *uploads/wpseo* dir creation fails.
	
* New features:
	* Remove category base, removes `/category/` from category URL's. Find it under Permalinks. Props to [WP No Category Base](http://wordpresssupplies.com/wordpress-plugins/no-category-base/) for having the cleanest code I could find in this area, which I reused and modified.
	* Admin bar goodness: an SEO menu! Try it if you're on 3.1 already, it allows you to perform several SEO actions!
	
= 0.2 =

* Bugs fixed:
	* Chars left counter works again as you type in title and SEO title.
	* No longer error out when unable to delete sitemap files in site root.
	* Fixed error when `memory_get_peak_usage` doesn't exist (below PHP 5.2).
	* Fixed error when Yoast News feed couldn't be loaded.
	* Fix for people who agressively empty their dashboards.
	* Permalink redirect fix for paginated searches.

* Changes:
	* Plugin now properly reports which sitemap files are blocking it from working properly and asks you to delete them if it can't delete them itself.
	* Some cosmetic fixes to dashboard widget.
	* Removed some old links to Yoast CDN and replaced with images shipped with plugin, for SSL backends.
	* New general settings panel on WPSEO Dashboard which allows you to disable WordPress SEO box on certain post types.
	* Option to use focus keyword in title, meta description and keyword templates.
	* Changed the hook for the permalink cleaning from `get_header` to `template_redirect`, which means it redirects faster and is less error prone.
	
* New Features:
	* Added option to export taxonomy metadata (PHP 5.2+ only for now).
	* Meta keywords are now an option... I don't like them but there's sufficient demand apparently. Works for homepage, post types, author pages and taxonomies.
	* Added an option to disable the advanced part of the edit post / page metabox.
	* Added option to disable date display in snippet preview for posts.
	* Multisite Network Admin page added, with three features:
		* The option to make WordPress SEO only accessible to Super admins instead of site admins.
		* The option to set a "default" site, from which new sites will henceforth acquire their settings on creation.
		* The option to revert a site to the "default" site's settings.
	
= 0.1.8 =

* Notice: The functionality in the post / page editor has changed quite a bit. Meta descriptions are now generated using the meta descriptions template if no meta description is entered, so it will for instance use the post excerpt, the SEO title is no longer filled automatically BUT it is properly shown in the snippet preview based on your title template. It should work faster, more intuitive and just better in general, but I do need your feedback, let me know if it's an improvement.
	
* Bugs fixed:
	* Fixed a notice for non existing metadesc.
	* Fixed several notices in title generation.
	* Directory paths in backend now properly recognized even when erroneously set to 1.
	* Fixed bug where frontpage title wouldn't be generated properly.
	* Made sure unzip of settings.zip (for settings import) works properly everywhere (by getting rid of `WP_Filesystem` and `unzip_file()`, as they do not work reliably).
	* Made sure meta descriptions are not shown on paged archives or homepages.
	
* Changes:
	* Admin:
		* Moved image used in news widget into images directory instead of loading from CDN to prevent https issues.
	* Breadcrumbs:
		* Creating proper breadcrumbs for daily archives now (linking back to month archives).
	* Post / Page edit box:
		* Meta description now properly generated using template for that particular post_type.
		* SEO Title is no longer auto filled, if you leave it empty "normal" title template generation is used.
		* Several improvements to javascripts.
	* Titles, Meta descriptions & Canonicals:
		* Speed up of variable replacement for titles and meta descriptions.
		* In fallback titles (when there's no template), plugin now sticks to `$sep` defined in `wp_title`.
		* Now properly generating canonical links for date archives.
		* The %%date%% variable now works properly on date archives too.
		* Added new filter to make title work properly on HeadWay 2.0.5 and up.
		* Fixed canonical and permalink redirection for paginated pages and posts (props to @rrolfe for finding the bug and coming up with first patch).
	* XML Sitemaps:
		* During sitemap generation, plugin now checks whether old sitemap.xml or sitemap.xml.gz files exist in root and deletes those if so.
		* Made including images optional.
		* Made it possible to pick which search engines to ping.
		* Fix in XSL path generation on HTTPS admin backends when frontend is normal HTTP.
		* XML Sitemap update on post publish now actually works properly.
		* No longer are XML Sitemaps enabled automatically when publishing a post (sorry about that).
	
= 0.1.7.1 =

* Apparently `is_network_admin()` didn't exist before WP 3.1. D0h!!!

= 0.1.7 =

* Bugs fixed:
	* Empty Home link when blog page is used and no settings have been set.
	* Fixed couple more notices (well, like, 10).
	* Bug in directory creation that would create the directory correctly but still throw an error and save the path wrongly to options.
	* Dismissing Blog public warning was only possible on SEO pages, now it's possible everywhere.
	* Excerpts, when used in description, are now properly sanitized from tags and shortcodes.
	* Properly fallback to `$wp_query->get_queried_object()` instead of `get_queried_object()` for < 3.1 installs.
	* Fixed several bugs in title generation, making it more stable and faster in the process.
	* Properly escape entities in page titles, both in front end and in posts overview.
	
* Changes:
	* Latest news from Yoast now appears on Network Admin too, and you can disable it there and on normal admin pages individually. First step towards getting a Multi Site Network Admin SEO page.
	* Added a "Re-test focus keyword" button for people using the Rich Text editor, which wasn't sending update events properly.
	
= 0.1.6 =

* New features:
	* Export & Import your WordPress Settings easily.
	* You can now supply extra variables to prevent from being cleaned out when clean permalinks is on.
	
* Bugs fixed:
	* No longer throw errors when wpseo dir cannot be created.
	* Your blog is not public warning can now be properly dismissed.
	* Fixed rewrite issues: apparently if you only load rewrite rules on the front-end, they don't get added when changing rewrites in the backend. D0h.
	* Rewrite rule for sitemap is now forced even harder when regenerating sitemap by hand.
	* Search permalinks now work properly, though in "old" ?s=query style, because of a bug in core. 
	* Breadcrumbs no longer errors when term that is supposed to show is empty.
	* Enabling breadcrumbs without setting any of the text fields no longer gives notices but proper defaults.
	* Proper fallback for get_term_title for pre WP 3.1 sites with custom taxonomies.
	
* Changes:
	* You can now dismiss settings advice.
	* You can now fix some of the settings advice just by clicking the button.
	* You can now make posts, pages and taxonomy terms of any kind always appear in sitemap even if they're noindex, or never, set on a piece by piece basis.
	* Permalink changes now invoke immediate XML sitemap update.
	* Added canonical url to the blog page if using a static page for front page (props [@rrolfe](http://twitter.com/rrolfe)).
	* Removing RSS feeds now actually works (props @rrolfe).
	* Added breadcrumb for 404 pages (props @rrolfe).
	* Drastically reduced memory usage during XML sitemap generation.
	
= 0.1.5 =

* Bugs fixed:
	* Duplicate noodp,noydir showing up in some occasions. Reworked most of robots meta output function.
	* Fixed couple more notices.
	* Trailing slash (when option set) now applied correctly in XML sitemap too.
	* Made sure regenerating sitemap worked again on post publish.
	* Force flush rewrite rules on activation / upgrade of plugin to make rewrite work.
	* Fixed empty RSS content bug caused in 0.1.4.
	
* Changes:
	* Removed part done quick edit functionality, will need to revisit once API improves.
	* Implemented a hook that would make the title work with Thematic based themes properly.
	* Added option to remove "start" rel link from head section.
	* Several style sheet changes to make backend styling easier and more robust.
	* Added option to force rewrite titles for people that can't adapt their theme, it's ugly but not as ugly as how All In One SEO handles it.
	* If title templates aren't set, the plugin now generates proper default titles.
	* The News module has moved to a separate directory, where all other modules will reside too, so they can be updated individually later. Download link for the news module will appear on yoast.com shortly.
	
* Documentation:
	* Added Admin Only notice in HTML code when no meta description could be generated.
	* Added a donation box, I'll gladly take your money ;)
	
= 0.1.4 =

* Bugs fixed:
	* Fixed canonical for paginated archives of any kind when permalink structure doesn't end with /
	* Fixed permalink redirect for paginated archives of any kind when permalink structure doesn't end with /
	* Made sure blog shows up in breadcrumbs when you want it too.
	* Fixed small javascript notice for js/wp-seo-metabox.js
	* Rewrote parts of XML Sitemap generation so it's now fully compliant with MultiSite. You no longer have to choose paths for sitemaps, they'll all have fixed locations and using WP Rewrite will be placed in the correct positions, f.i. example.com/sitemap.xml.
	* Heavily reduced memory usage on admin pages.
	* Rewrote module structure and added some API's to be used in the modules.
	* Plugin now creates uploads/wpseo dir to store all files it creates and takes in.
	* Fixed several notices throughout the code.
	* Made sure SEO title in edit posts screen shows correct SEO Title.
	* Changed table sorting javascript for XSL's to Yoast CDN.

= 0.1.3 =

* Bugs fixed:
	* SEO Title no longer being overwritten when it's already set.
	* Titles for date archives work too now.
	* On initial page load or SEO title regeneration number of chars remaining updates properly.
	* Entities in titles and meta descriptions should now work correctly.
	* When editing SEO title snippet preview now correctly updates with focus keyword bolded.
	* Entities in XML sitemap should now show correctly.
	* When using %%excerpt%% in descriptions it now correctly is shortened to 155 chars.
	* Regenerating XML News sitemaps should no longer give a Fatal error but just work.
	* Focus keyword should now properly be recognized in slug even when slug is too long to display.
	* Breadcrumbs now show proper home link when showing blog link is disabled.
	* Non post singular pages (pages and custom post types) no longer show blog link in breadcrumb path.

* New features:
	* Added option to regenerate SEO title (just click the button).
	* Advanced button now looks cooler (hey even little changes deserve a changelog line!).
	* Now pinging Ask.com too for updated sitemaps, for those of you caring about SEO for Ask.
	* Added plugin version number to "branding" comment to help in bug fixing.
	
= 0.1.2.1 =

* Added a missing ) to prevent death on install / going into wp-admin.

= 0.1.2 =

* Bugs fixed:
	* Non ASCII characaters should now display properly.
	* Google News Module: added input field for Google News publication name, as this has to match how Google has you on file.
	* Stripped tags out of title and meta description output when using, f.i., excerpts in template.
	* Meta description now updates in snippet preview as well when post content changes and no meta description has been set yet.
	* Meta description generated from post content now searches ahead to focus keyword and bolds it.
	* Meta description should now show properly on blog pages when blog page is not site homepage.
	* Alt or title for previous image could show up in image sitemap when one image didn't have that attribute.
	* Prevented fatal error on remote_get of XML sitemap in admin/ajax.php.
	* When there's a blog in / and in /example/ file editor should now properly get robots.txt and .htaccess from /example/ and not /.
	* Reference to wrongly named yoast_breadcrumb_output fixed, should fix auto insertion of breadcrumbs in supported theme frameworks.
	* Prevented error when yoast.com/feed/ doesn't work.
	* Fixed several notices for unset variables.
	* Added get text calls in several places to allow localization.

* (Inline) Documentation fixes:	
	* Exclusion list in XML sitemap box for post types now shows proper label instead of internal name.
	* Exclusion list in XML sitemap box for custom taxonomies now shows plural instead of singular form.
	* Added explanation on how to add breadcrumbs to your theme, as well as link to more explanatory page.
	
* Changes:
	* Links to Webmaster Tools etc. now open in new window.
	* Heavily simplified the javascript used for snippet preview, removing HTML5 placeholder code and instead inserting the title into the input straight away. Lot faster this way.
	* Removed Anchor text for the blog page option from breadcrumbs section as you can simply set a breadcrumbs title on the blog page itself.
	* Added option to always remove the Blog page from the breadcrumb.

= 0.1.1 =

* Bugs fixed:
	* Double comma in robots meta values, as well as index,follow in robots meta.
	* Oddities with categories in breadcrumbs fixed.
	* If complete meta value for SE is entered it's now properly stripped, preventing /> from showing up in your page.
	* Category meta description now shows properly when using category description template.
	* Removed Hybrid breadcrumb in favor of Yoast breadcrumb when automatically adding breadcrumb to Hybrid based themes.
	* First stab at fixing trailing slashed URL's in XML sitemaps.
	* Made %%page%% also work on page 1 of a result set.
	* Fixed design of broken feed error.
	* Made sure %%tag%% works too in title templates.
	
* (Inline) Documentation fixes:	
	* Added this readme.txt file describing all the SEO functionality, and why this is _the_ All in one SEO plugin.
	* MS Webmaster Central renamed to Bing Webmaster Tools.
	* Added links to Bing Webmaster Tools and Yahoo! Site explorer to meta values box, as well as an explanation that you do not need to use those values if your site is already verified.
	* Changed wording on description of clean permalinks.
	* Added line explaining that SEO title overwrites the SEO title template.
	* Added line telling to save taxonomy and post_type excludes before rebuilding XML sitemap.
	
* Changes:
	* Changed robots meta noindex and nofollow storage for pages to boolean on noindex and nofollow, please check when upgrading.
	* Now purging W3TC Object Cache when saving taxonomy meta data to make sure new settings are immediately reflected in output.
	* Namespaced all menu items to prevent collissions with other plugins.
	* Several code optimizations in admin panels.
	* Huge code optimizations in breadcrumbs generation and permalink clean up.
	* Permalink cleaning now works for taxonomies too.
	* Faked All in One SEO class to make plugin work with themes that check for that.
	
* New features:
	* Noindex and nofollow options for taxonomies (noindexing a term automatically removes it from XML sitemap too).
	* Editable canonicals for taxonomies.
	* Completed module functionality, using the XML News sitemap as first module.
	* Added experimental "Find related keywords" feature that'll return keywords that are related to your focus keyword.
	
* Issues currently in progress:
	* WPML compatibility for the multilingual SEO's.
	* XML Sitemap errors in Bing Webmaster Tools (due to use of "caption" for images).
	

= 0.1 =

* Initial beta release.

== Other Notes ==

= Usage guides =

* WP Beginner has written a good guide on [how to install and setup WordPress SEO](http://www.wpbeginner.com/plugins/how-to-install-and-setup-wordpress-seo-plugin-by-yoast/)

= Press Mentions =

* I was recently [interview by Mashable](http://mashable.com/2011/02/17/wordpress-seo-interview/) about this plugin, talking about what the plugin does and why I think my plugin is superior to All in One SEO.

== Upgrade Notice ==

= 0.3.4 =
Upgrade immediately to make sure your WordPress install is secure.