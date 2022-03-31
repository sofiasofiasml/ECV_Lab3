function query(path){
	return document.querySelector(path)
}
function onHide(element){
	element.style.display="none";
}
function Show(element){
	element.style.display="";
}
var input;
var CORE = 
{
	BoolEnter: true, 
	contEnter: 0, 
	timer: 600, 
	timeoutVal: 600,
	canvas: null, 
	modules: [], 
	mouse_pos : [0,0],
	
	init: function()
	{
		query(".container").style.display="";
		WORLD.init();
		this.initiateServer();
		input = query("#writtenArea");
		var button = query("#ButtonwrittenArea");
		input.addEventListener("keydown", onKeyPress );

		//button.addEventListener("click",onClick);
		// query("#bottonSend").addEventListener("click",onClick);
		// input.addEventListener('keyup', handleKeyUp); 
		document.addEventListener('keypress', logKey);
		// const inputs = document.querySelectorAll(".input");

	},

	login: function(){
		
		var username = query("input#login-username")
		var password = query("input#login-password")
		var username = username.value;
		var password = password.value;
		
		var content={
			username: username,
			password: password
		};
		var message = {
			type: "LOG",
			content: content,
			username: username
			
		};
		server.sendMessage(message);
	},
	handlelogin: function(username){
		WORLD.local_user.name= username;
		WORLD.updateUser();
		var password = query("input#login-password")
		var username = query("input#login-username")
		username.value ="";
		password.value="";
		query(".container").style.display="none";
		initCanvas();
		query("#map").style.display="";
		query("#writtenArea").style.display="";
		query("#ButtonwrittenArea").style.display="";
		ready = true;
		

	},
	signup: function(){
		console.log("signup");
		var username = query("#username_reg")
		var password = query("#password_reg")
		var Name = query("#name_reg")
		var LastName = query("#lastname_reg")
		var username = username.value;
		var password = password.value;
		
		var content={
			username: username,
			password: password
		};
		var message = {
			type: "REGISTER",
			content: content,
			username: username
			
		};
		server.sendMessage(message);
	},
	
	initiateServer: function(username){

		server = new Client();
		server.connect();
		server.on_message=onMessageReceived;

	// on click in the button we send a messagee to the server
	},
	

	createUser:function(){
		var name = query("#nameUser");
		var username=name.value; 
		var isUser=false;
		for (var i = 0; i < DB.friends.length; i++) {
			var user = DB.friends[i];
			if(user.username==username){
				isUser=true;
			}
		}
		if(!isUser) {
			
			if(!DB.users[username]) {
				DB.addUser("4400",username);
			}
			DB.addFriend(username);
		}
		name.value="";
	}
	

}


