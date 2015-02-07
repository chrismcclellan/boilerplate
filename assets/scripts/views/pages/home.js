define([
    'underscore',
    'jquery',
    'backbone',
    'marionette',
    'views/pages/base',
    'views/modules/home/home',
    'vent',
    'util',
    'templates'
], function(_, $, Backbone, Marionette, BasePage, HomeView, vent, util, templates) {

    'use strict';

    var View = BasePage.extend({

        template: templates['pages/home'],

        onRender: function() {
            this.content.show(new HomeView(this.options));
        }

    });

    return View;

});
