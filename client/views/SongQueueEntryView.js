// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  // initialize: function() {
  // 	this.render(); 
  // },

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  render: function(){
  	//return this.$el.html(this.template(this.model.attributes));


    this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }
});
