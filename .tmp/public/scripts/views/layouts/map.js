define([
    'views/layouts/default'
], function(Default, Auth) {

    'use strict';

    /**
     * This exists because the requirejs needs 
     * these view in the build process
     **/

    return {
        'default': Default
    };

});
