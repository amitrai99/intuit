/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var InvoiceModelModel = Backbone.Model.extend({
        url: 'cd-service/api/v2/',

        initialize: function() {
        },

        defaults: {
          "name": 'Joe',
          "email": 'joe@home.com',
          "dueDate": "",
          "descriptionAmount": [
            {
              "description": "Nike 300",
              "amount": "101"
            },
            {
              "description": "Adidas 200",
              "amount": "99"
            }
          ]
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

    return InvoiceModelModel;
});
