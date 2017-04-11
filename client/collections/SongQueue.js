// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  playFirst: function() {
  	// this.models[0].play();
  	this.at(0).play(); 
  },

  initialize: function() {
  	//enqueue first
  	//if length === 1 then playFirst 


  	this.on('add', function() { 
  		console.log('MODELS', JSON.stringify(this.models))

  		if (!this.at(1)) {
  			this.playFirst(); 
  		}
    })

    this.on('ended', function() {
    	this.shift(); 

    	if (this.length > 0) {
    		this.playFirst();
    	}
    });

    this.on('dequeue', function() {
    	this.remove(); 
    })
  }




});
