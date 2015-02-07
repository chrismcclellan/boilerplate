define([
    'underscore',
    'jquery',
    'backbone',
    'marionette',
    'views/pages/base',
    'views/modules/meeting/delete',
    'views/modules/meeting/overview',
    'vent',
    'util',
    'templates'
], function(_, $, Backbone, Marionette, BasePage, DeleteView, OverviewView,vent, util, templates) {

    'use strict';

    var View = BasePage.extend({

        template: templates['pages/meeting'],

        map: {
            'delete': DeleteView,
            'overview': OverviewView
        },

        init: function() {
            
            var id = this.options.id;
            
            this.model = util.get('collections').get('meetings').findWhere({id: id});

        },

        templateHelpers: function() {

            var obj = {};
            obj.locals = {};
            obj.locals.options = this.options;

            return obj;
        },

        onShow: function() {

            var options = this.options;
            var action = this.map[options.action] ?  options.action : 'overview';

            this._showContent(action);
        },

        _showContent: function(action) {

            var self = this;
            
            this.options.action = action || 'overview';

            var params = _.extend({ model: this.model }, this.options);

            self.content.show(new self.map[action](params));
            
        }

    });

    return View;

});
