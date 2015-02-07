define([
    'underscore',
    'jquery',
    'backbone',
    'marionette',
    'views/pages/base',
    'views/modules/new-meeting/new-meeting',
    'vent',
    'util',
    'templates'
], function(_, $, Backbone, Marionette, BasePage, NewMeetingView, vent, util, templates) {

    'use strict';

    var View = BasePage.extend({

        template: templates['pages/new-meeting'],

        onRender: function() {
            this.content.show(new NewMeetingView(this.options));
        }

    });

    return View;

});
