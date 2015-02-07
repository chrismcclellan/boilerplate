define([
    'underscore',
    'jquery',
    'backbone',
    'marionette',
    'views/pages/base',
    'vent',
    'util',
    'templates'
], function(_, $, Backbone, Marionette, BasePage, vent, util, templates) {

    'use strict';

    var View = BasePage.extend({

        template: templates['pages/error-404']

    });

    return View;

});
