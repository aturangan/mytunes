// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
  	this.collection.on('add remove', this.render, this);
  	this.render(); 

  },

  render: function() {
    //return this.$el;

    this.$el.children().detach();

    return this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }
    // this.$el.html('<th>Library</th>').append(
    //   this.collection.map(function(song) {
    //     return new SongQueueEntryView({model: song}).render();
    //   })
    // );

});
