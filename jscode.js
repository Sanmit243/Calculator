var screenstr="";
function inputstring(s){
    screenstr=screenstr+s;
    $("h1").html(screenstr);
}
$(".reset").on("click",function(){
    reseting();
    
})
$("#equalto").on("click",function(){
    evaluate();
})
$(".key").on("click",function(){
    inputstring(this.id);
})
function reseting(){
    screenstr="";
    $("h1").html("0");
}
function evaluate(){
    try{screenstr=eval(screenstr);
        $("h1").html(screenstr);}
    catch{
        $("h1").html("ERROR!");
    }
}
addEventListener("keydown", function(event){
    if(event.key=='7' || event.key=='8' || event.key=='9' || event.key=='4' || event.key=='5' || event.key=='6' || event.key=='1' || event.key=='2' || event.key=='1' || event.key=='/' ||  event.key=='*' || event.key=='-' || event.key=='+' || event.key=='.'){
        inputstring(event.key);
        anim(".key");
    }
    if(event.key=="Enter"){
        evaluate();
        anim("#equalto");
    }
    if(event.key=="Backspace" || event.key=="Escape"){
        reseting();
        anim(".reset");
    }
});
function reseting(){
    screenstr="";
    $("h1").html("0");
}
function evaluate(){
    try{screenstr=eval(screenstr);
        $("h1").html(screenstr);}
    catch{
        $("h1").html("ERROR!");
    }
}
function anim(smtg){
    $(smtg).classList.add("clicked");
    setTimeout(function(){$(smtg).classList.remove("clicked")},100);
}
