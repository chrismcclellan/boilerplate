/*
 *  Required in alphabetical order
 */

define([
    'views/pages/account',
    'views/pages/error-404',
    'views/pages/home',
    'views/pages/new-meeting',
    'views/pages/page',
    'views/pages/meeting',
    'views/pages/meetings'
], function(Account, Error404, Home, NewMeeting, Page, Meeting, Meetings) {

    'use strict';

    /*
     *  This exists because requirejs needs 
     *  these views in the build process
     */

    return {
        'account':     Account,
        'error-404':   Error404,
        'home':        Home,
        'new-meeting': NewMeeting,
        'page':        Page,
        'meeting':     Meeting,
        'meetings':    Meetings
    };

});
