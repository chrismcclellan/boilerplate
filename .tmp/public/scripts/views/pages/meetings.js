define([
    'underscore',
    'jquery',
    'backbone',
    'marionette',
    'views/pages/base',
    'views/modules/meetings/meetings-list',
    'vent',
    'util',
    'templates'
], function(_, $, Backbone, Marionette, BasePage, Content, vent, util, templates) {

    'use strict';

    var View = BasePage.extend({

        template: templates['pages/meetings'],

        onRender: function() {
            this.content.show(new Content());
        }

    });

    return View;

});
