/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var InvoiceViewView = Backbone.View.extend({
        template: JST['app/scripts/templates/invoiceView.ejs'],
        subTemplate: JST['app/scripts/templates/descAmount.ejs'],

        className: '',

        events: {
          "click #add-line": "addLine",
          "blur #fd-invoice2 input.amount" : "runningTotal"
        },

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        },

        /**
         * add line adds a desc and amount line to form
         * @param {Event} e click event obect
         */
        addLine(e) {
          var lastId = parseInt( this.findLastId() ) + 1;
          var html = this.subTemplate({id: lastId});
          this.$el.find('#fd-invoice2').append(html);
        },

        /**
         * returns the last known highest id
         * @return {String} last elements id in the fd-invoice2 fieldset
         */
        findLastId() {
          var id = this.$el.find('#fd-invoice2 input:last').attr('id');
          return id ? id.split('-')[1] : 1;
        },

        /**
         * adds up the amounts and displays in the bottom of the view
         */
        runningTotal(e) {
          var amount = 0;
          this.$el.find('#fd-invoice2 input.amount').each( function(index, value) {
            var amt = $(value).val();
            amount = amt ? amount + parseFloat(amt) : amount;
          });
          this.$el.find('#running-total').html(amount);
        }
    });

    return InvoiceViewView;
});
