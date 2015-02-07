define([
    'underscore',
    'jquery',
    'backbone',
    'backbone.wreqr'
], function(_, $, Backbone) {

    'use strict';

    /**
     * return singleton
     */
    return new Backbone.Wreqr.EventAggregator();

});
