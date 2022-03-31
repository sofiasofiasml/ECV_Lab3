
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
			console.log(msg);
			that.onServerEvent(msg);
		
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
Client.arrayToString = function(array)
{
	var str = "";
	for(var i = 0; i < array.length; i++)
		str += String.fromCharCode(array[i]);
	return str;
}

Client.prototype.onServerEvent = function( message)
{


	if(message.type=="private"){
		onMessageReceived(message)
	}

	else if(message.type == "user_update")
    {
        var user = message.user;
		if(WORLD.users[user.id]) WORLD.users[user.id].fromJSON(message.user);
	}
	else if(message.type == "pos_update")
    {
        var user = message.user;
		if(WORLD.users[user.id]) {
			var user_=WORLD.users[user.id];
			var new_posit = user.position;
			user_.goPos = new_posit;
		}
		else{
			var user = message.user;
			var usr=WORLD.createUser(user.id,"undefined",0);
			var room = message.room;
			if(room) WORLD.rooms[room.id].fromJSON(room);
			if(user.id!=WORLD.local_user.id){
				// usr.anim_idle = new RD.SkeletalAnimation();
				// usr.anim_idle.load("data/girl/idle.skanim");
				// usr.anim_walk = new RD.SkeletalAnimation();
				// usr.anim_walk.load("data/girl/walking.skanim");
				var node=onNewUser(usr.character,user.id);
				usr.node=node;
			}
		}
	}
	else if (message.type == "LEAVE") //user leaving
	{
		var user = message.user;
		if(WORLD.users[user.id]){
			var user = WORLD.users[user.id]
			console.log("User"+user.id+" is gone");
			if(scene && scene.root && user.node)scene.root.children[user.node].destroy();
			delete WORLD.users[user.id];
		}
	}
	else if (message.type == "ROOM") 
	{
		var room = message.room;
		if(WORLD.rooms[room.id]){
			WORLD.rooms[room.id].fromJSON(room);
		}
		
	}
	else if(message.type=="LOG"){
		var content= message.content;
		if(content.type=="NotValid"){
			console.log("Not Valid User!");
			var username = query("input#login-username")
			var info = query(".info")
			info.innerHTML ="Not Valid User!"
			var password = query("input#login-password")
			username.value ="";
			password.value="";
		}
		else if(content.type=="Valid"){
			console.log("Valid User");
			CORE.handlelogin(message.username);
		}
		else {
			console.log("WrongPassword!");
			var username = query("input#login-username")
			username.value ="";
			var info = query(".info")
			var password = query("input#login-password")
			info.innerHTML ="Wrong Password!"
			password.value ="";
		}
	}
	else if(message.type=="REGISTER"){
		var content= message.content;
		if(content.type=="Exists"){
			console.log("User already exists!");
			var username = query("#username_reg")
			var password = query("#password_reg")
			var info2 = query(".info2")
			var Name = query("#name_reg")
			var LastName = query("#lastname_reg")
			info2.innerHTML ="Username already exists. Choose another one."
			var password = query("input#login-password")
			username.value ="";
			password.value="";
			Name.value="";
			LastName.value="";
		}
		else {
			console.log("User is correct");
			CORE.handlelogin(message.username);
		}
	}
	else if (message.type == "USERS") //user leaving
	{
		var listUsers = message.users;
		var room_index = message.room_id;
		var room = WORLD.rooms[room_index];
		for(var i=0;i<listUsers.length;i++){
			var user = listUsers[i];
			if(user){
				var user_=WORLD.createUser(user.id,"undefined",0);
				user_.fromJSON(user);
			}
		}
	}
	else if (message.type == "LOGIN") 
	{
		var user = message.user;
		WORLD.createUser(user.id,"undefined",0);
		WORLD.users[user.id].fromJSON(user);
		if (!WORLD.local_user){
			WORLD.local_user = WORLD.users[user.id];
		}
		
		
	}
	else if (message.type == "USER") 
	{
		var user = message.user;
		var usr=WORLD.createUser(user.id,"undefined",0);
		var room = message.room;
		if(room) WORLD.rooms[room.id].fromJSON(room);
		if(user.id!=WORLD.local_user.id){
			// usr.anim_idle = new RD.SkeletalAnimation();
			// usr.anim_idle.load("data/girl/idle.skanim");
			// usr.anim_walk = new RD.SkeletalAnimation();
			// usr.anim_walk.load("data/girl/walking.skanim");
			var node=onNewUser(usr.character,user.id);
			usr.node=node;
		}
		
	}
	else if (message.type == "LEFT_ROOM") 
	{
		var user = message.user;
		var room = message.room;
		if(room) WORLD.rooms[room.id].fromJSON(room);
		 scene.root.children.splice(user.node,1);
		
	}
	
}

function sendMessage(message)
{	
	var my_message= JSON.stringify(message);
	server.sendMessage(my_message);
	
	
}
function onMessageReceived(str_msg)
{
	//pasar str_msg un altre cop de str a el q toca
	console.log("message Received!");
	var mesg = str_msg;
	var room = WORLD.rooms[mesg.room];
	WORLD.newMessage(mesg.data,mesg.user,mesg.type);

}
function sendUpdate(){
	if(WORLD.local_user) WORLD.updatePos();
}
setInterval(sendUpdate,1000);