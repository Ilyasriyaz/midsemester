function greeting (language){
if (language == chichewa){
    console.log("Muli bwanji");
}
else if (language == yao){
    console.log("Muli uli");
}
else if (language == tumbuka){
    console.log("Muli wuli");
}
else{
    console.log("Hello");
}
}


//switch statement
function greetingSwicth(language){
switch(language){
    case "Chichewa":
        console.log("Uli bwanj");
        break;
    case "Yao":
        console.log("Muli uli");
        break;
    case "Tumbuka":
        console.log("Muli wuli");
        break;
    default:
        console.log("Hello") ;   
}
}
