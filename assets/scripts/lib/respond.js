define([
    'underscore',
    'jquery',
    'vent'
], function(_, $, vent) {

    'use strict';

    var Respond = {

        // RESPONSIVE HELPER
        windowSize: function(req) {
            var size = '';
            if ('xlarge' === req) {
                size = 'only screen and (min-width: 1200px)';
            }
            if ('large' === req) {
                size = 'only screen and (min-width: 980px) and (max-width: 1199px)';
            }
            if ('large-down' === req) {
                size = 'only screen and (max-width: 1199px)';
            }
            if ('large-up' === req) {
                size = 'only screen and (min-width: 980px)';
            }
            if ('medium' === req) {
                size = 'only screen and (min-width: 768px) and (max-width: 979px)';
            }
            if ('medium-down' === req) {
                size = 'only screen and (max-width: 979px)';
            }
            if ('medium-up' === req) {
                size = 'only screen and (min-width: 768px)';
            }
            if ('small' === req) {
                size = 'only screen and (max-width: 767px)';
            }
            if ('xsmall' === req) {
                size = 'only screen and (max-width: 480px)';
            }
            return window.Modernizr.mq(size);
        },

    };

    return Respond;

});
