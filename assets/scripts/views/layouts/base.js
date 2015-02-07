define([
    'underscore',
    'jquery',
    'marionette',
    'vent',
    'util',
    'templates',
    'views/layouts/map',
    'views/pages/map',
], function(_, $, Marionette, vent, util, templates, layoutsMap, pagesMap) {

    'use strict';

    var View = Marionette.LayoutView.extend({

        el: 'body',

        events: {
            'click a.navigate': '_navigate'
        },

        regions: {
            body: '#body'
        },

        initialize: function(options) {
            _.bindAll(this);
        },

        // Top level click binding handles stateful nav wherever 
        // the `.navigate` selector is present

        _navigate: function(event) {

            // If we want to handle events lower down
            // in the application - we should stop propagation there
            if (event.isPropagationStopped()) {
                return true;
            }

            event.preventDefault();

            var $targ = $(event.currentTarget);
            var href = $targ.attr('href');

            vent.trigger('do:navigate', href);
        },


        loadPage: function(page, options) {

            options.parent = this.body.currentView;

            var layout = options.layout || 'default';

            // See if we have the correct layout inited already
            if (!this.body.currentView || !(this.body.currentView instanceof layoutsMap[layout])) {
                return this.loadLayout(layout, options, this.loadPage);
            }

            var PageView = pagesMap[ page || 'page' ];

            if (!this.body.currentView || !this.body.currentView.loadContent) {
                return console.error("Trying to load page when layout hasn't been inited");
            }

            this.body.currentView.loadContent(PageView, options);

            this._setClasses(options);
            this._setTitle(options);

            window.scrollTo(0, 0);
        },


        loadLayout: function(layout, options, cb) {

            var self = this;
            var args = arguments;

            options.parent = this;

            var LayoutView = layoutsMap[layout || 'default'];

            this.body.show(new LayoutView(options));

            this._setClasses(options);
            this._setTitle(options);

            window.scrollTo(0, 0);

            if (_.isFunction(cb)) {
                return cb(options.page, options);
            }
        },


        _hasLayout: function(options) {
            return Boolean(this.body.currentView);
        },

        _setClasses: function(options) {

            options = options || {
                layout: 'default'
            };

            var keys = _.keys(options);
            var selectors = [];

            for (var key in options) {
                if (_.isString(options[key])) {
                    selectors.push([key, options[key]].join('-'));
                }
            }

            this.$el.removeClass();
            this.$el.addClass(selectors.join(' '));
        },

        _setTitle: function(options) {

            var config = util.get('config');
            var name = config.site_settings.site_name;
            var tagline = config.site_settings.tagline;

            var page = options.page || '';
                page = page.charAt(0).toUpperCase() + page.slice(1);


            var title = '';

            if (page) {
                title = [page, name].join(' | ');
            } else {
                title = [name, tagline].join(' | ');
            }

            $('title').text(title);
        }

    });

    return View;

});
