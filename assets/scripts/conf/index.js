define([
    'text!conf/site-settings.json'
], function(site_settings) {

    'use strict';

    // Map of configs
    var data = {
        site_settings: site_settings
    };

    // Build actual config
    var config = {};

    for (var key in data) {

        try {
            config[key] = JSON.parse(data[key]);
        } catch(error) {
            console.error('scripts/conf/index.js', error);
        }
    }

    return config;

});
