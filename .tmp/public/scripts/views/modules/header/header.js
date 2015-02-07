define([
    'underscore',
    'jquery',
    'marionette',
    'vent',
    'util',
    'templates',
    'foundation'
], function(_, $, Marionette, vent, util, templates) {

    'use strict';

    var View = Marionette.ItemView.extend({

        template: templates['header'],

        attributes: {
            id: 'header-inner-wrapper'
        },

        events: {
            'click .has-pushdown > a': '_pushdown',
            'click .toggle[data-action="search"]': '_toggleSearch'
        },

        templateHelpers: function() {

            var obj = {};
            
            obj.locals = {};
            obj.config = util.get('config');

            return obj;
        },

        initialize: function(options) {

            _.bindAll(this);

            this.children = this.children || new Backbone.ChildViewContainer();
            this.model = util.get('user');

            vent.on('do:navigate', this._setActiveNav, this);

            this.$win = util.get('window');
            this.$doc = util.get('document');

            // this.$win.bind('scroll.'+this.cid, this._onScroll);
            this.$win.bind('resize.'+this.cid, _.throttle(this._onResize, 300));
        },

        _onResize: function() {
            this._positionEl();
        },

        _positionEl: function(event) {
            var $wrapper = $('#header-inner-wrapper');
            var $sticky = $('.sticky', $wrapper);

            $sticky.css({
                'left': $wrapper.offset().left + "px",
                'width': $wrapper.width() + "px"
            });
        },

        _onScroll: function(event) {
        },

        _toggleSearch: function(event) {

            event.preventDefault();

            var $targ = $(event.currentTarget);
            var $parent = $targ.parent('.search-wrapper');

            if ($parent.hasClass('show')) {
                return $parent.removeClass('show');
            }

            $parent.find('input').focus();
            $parent.addClass('show');
        },

        onShow: function() {
            var self = this;

            this._setActiveNav(Backbone.history.fragment);
            this._positionEl();
        },

        _setActiveNav: function(path) {

            // strip of beginning slash for all paths
            path = (path.charAt(0) === '/') ? path.substr(1) : path;

            // get base resource in path
            var resource = path.split('/')[0];

            // mark active nav item based on resource
            this.$('.active').removeClass('active');

            if (!resource) {
                return;
            }
            
            this.$('[href^="/' + resource + '"]').parent('li').addClass('active');
        },

        onDestroy: function() {
            this.children.call('destroy');
        }

    });

    return View;

});
