function keycode(){
    var key = event.keyCode;
    var key1=event.which;
    var key2=event.key;
    document.getElementById("keycode").innerHTML="keycode:"+key;
    document.getElementById('whichkey').innerHTML="whichcode:"+key1;
    document.getElementById("eventcode").innerHTML="eventcode:"+key2;
    
    
    console.log(event);
    console.log(key.event);
    
}
    
    

   /* 
}
function eventcode(){
    var key2=event.eventcode;
    document.getElementById("eventcode").innerHTML="eventcode"+key2;
    console.log(key2.event);} */
