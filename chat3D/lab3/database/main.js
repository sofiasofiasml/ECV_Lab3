function login(){
    var username = document.querySelector("input#login-username")
    var password = document.querySelector("input#login-password")
    var username = username.value;
    var password = password.value;

    var message = {
        username: username,
        password: password
    };
    server.sendMessage(message);
}


function Client()
{
    this.socket = null;
	this.serverMaster =false;
	this.on_message = null; //when somebody sends a message
	this.num_clients=0;
	this.clients={};
	this.user_id;
	this.username
}

Client.prototype.connect =function(url="", room_name="",on_connect, on_message, on_close ){

    fetch("https://ecv-etic.upf.edu/node/9006/info").then(function(){console.log("hola");});

	this.socket = new WebSocket("wss://ecv-etic.upf.edu/node/9006/ws/");
	var that = this;

	this.socket.onopen = function(){  
		console.log("Socket has been opened! :)");
	}
	this.socket.onclose =  function(e) {
		console.log("Socket has been closed: ", e); 
	};
	
	this.socket.onmessage = function(msg){  
		if(that.socket != this)
			return;

		that.info_received += 1;

		if( msg.data.constructor === ArrayBuffer )
		{
			var buffer = msg.data;
			processArrayBuffer( buffer );
		}
		else if( msg.data.constructor === String )
		{
			console.log("message Received!");
			msg = JSON.parse(msg.data);
			console.log(msg)
		
		}
		else
			console.warn("Unknown message type");
	} 
	 //PER SI LA INFO ARRIBA EN BITS PODER-HO PASSAR A STRING
	function processArrayBuffer( buffer )
	{
		console.log("buffer");
		that.onServerEvent(buffer );
	}
	
	this.socket.onerror = function(err){  
		console.log("error: ", err );
	}
}
var server = new Client();
server.connect();
Client.prototype.sendMessage = function( msg, user_ids )
{
	if(msg === null)
		return;

	if(msg.constructor === Object)
		msg = JSON.stringify(msg);

	if(!this.socket || this.socket.readyState !== WebSocket.OPEN)
	{
		console.error("Not connected, cannot send info");
		return;
	}
	this.socket.send(msg);
}
