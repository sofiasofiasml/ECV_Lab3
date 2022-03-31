
function speakDescription(text)
{
    //get voices list
    var voices = speechSynthesis.getVoices();
    // var text = "Bienvenido al museo del mundo"; 
    //create sentence
    var utterThis = new SpeechSynthesisUtterance( text );
    // utterThis.lang = ''
    //assign voice, be careful as voices have a language associated
    var i =0; 
    if(voices[i].lang){
        while(voices[i].lang!='es-ES')
        {
            i++; 
        }
        utterThis.voice = voices[i];

        //speak
        speechSynthesis.speak( utterThis );
    }
}


