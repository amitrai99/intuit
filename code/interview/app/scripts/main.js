/*global require*/
'use strict';

require.config({
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/lodash/dist/lodash',
        bootstrap: '../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap'
    }
});

require([
    'backbone'
], function (Backbone) {
    Backbone.history.start();

    require([
      'views/invoiceView',
      'models/invoiceModel'], function( inView, inModel ) {
        console.log('@@@@ - Loading view');
        var cdModel = new inModel();
        var cdView = new inView( { model: cdModel, el: '#cd-content' } );
        cdView.render();
    });
});
