function handleKeyUp() {
    window.clearTimeout(CORE.timer); // prevent errant multiple timeouts from being generated
    CORE.timer = window.setTimeout(() => {
		if( CORE.contEnter>1 || CORE.BoolEnter == false)
		{
			input.value=""; 
			
			CORE.BoolEnter = true;  
			CORE.contEnter =0; 
		}
}, CORE.timeoutVal);
}

function onClick(){

	content=input.value;
	sendMessageUsersRoom(content); 
    input.value="";
	
}

// var content = query("#writtenArea");
// var input = query("#ButtonwrittenArea");
// input.addEventListener("keydown", this.onMessage );

function onKeyPress( event )
{
	if(event.code == "Enter" && !event.shiftKey && input.value!="")
	{
		content=input.value;
		sendMessageUsersRoom(content); 
        input.value="";

    }
    // if(OldKeyPres == ":" && event.key == "Control" && !oneEmoji){
    //     var text = input.value; 
    //     input.value =text.slice(0,-1); 
    //     input.value += String.fromCodePoint(0x1F600);
    //     oneEmoji= true; 
    // }
    // if(event.key != "Control"){
    //     oneEmoji = false; 
    // }
    // var msg = input.value; 
    // var chat = WORLD.chats[WORLD.actual_chat];
    // if (WORLD.actual_chat!=0) sendMessage(msg,chat.users);
    // else sendMessage(msg);
}

// function logKey(e) {

//     OldKeyPres = e.key;
//     if(e.code == "Enter" && !e.shiftKey)
//     {
//         contEnter +=1; 
//     }
//     else{
//         contEnter =0; 
//     }    
// }

