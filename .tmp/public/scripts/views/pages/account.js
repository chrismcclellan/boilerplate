define([
    'underscore',
    'jquery',
    'backbone',
    'marionette',
    'views/pages/base',
    'views/modules/account/api',
    'views/modules/account/password',
    'views/modules/account/preferences',
    'vent',
    'util',
    'templates'
], function(_, $, Backbone, Marionette, BasePage, APIView, PasswordView, PreferencesView, vent, util, templates) {

    'use strict';

    var View = BasePage.extend({

        template: templates['pages/account'],

        map: {
            'api': APIView,
            'password': PasswordView,
            'preferences': PreferencesView
        },

        init: function() {
            this.model = util.get('user');
        },

        onRender: function() {

            var options = this.options;
            var action = this.map[options.action] ?  options.action : 'billing';
            var params = _.extend({ model: this.model }, options);

            this.content.show(new this.map[action](params));

            this.$('li.active').removeClass('active');
            this.$('[data-action="' + this.options.action + '"]').parent('li').addClass('active');
        },

        _showContent: function(action) {

            this.options.action = action || 'billing';

            var params = _.extend({ model: this.model }, this.options);

            this.content.show(new this.map[action](params));
        }

    });

    return View;

});
