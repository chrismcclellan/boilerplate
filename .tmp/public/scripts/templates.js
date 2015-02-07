define([
    'underscore',
    'template-registry'
], function(_, registry) {

    'use strict';

    var Templates = {};
    var regKeys = _.keys(registry);
    var regLen = regKeys.length;
    var newKey = [];
    var currentKey;

    // Loop over template registry 
    // and build better keys while compiling templates
    for (var i = 0; i < regLen; i++) {

        // get current key from registry
        currentKey = regKeys[i];

        // build friendlier key for compiled templates
        newKey = currentKey.replace(".hbs", "");
        newKey = newKey.split('templates/')[1];

        Templates[newKey] = registry[currentKey];
    }

    return Templates;

});
