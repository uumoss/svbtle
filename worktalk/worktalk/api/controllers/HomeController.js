module.exports = {
   
	_config: {}, 

	index: function(req, res) {
	  Message.find().done(function(err, messages) {
	    res.view('home', {messages: messages});
	  });
	}
  
};


 

  
