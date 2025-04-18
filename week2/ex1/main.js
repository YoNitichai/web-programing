const name = window.prompt("คุณชื่อไร");
if(username !== null|| username !=="") {
document.getElementById("show-name").innerText = "สวัสดี"+"name"

}

function showUserAgent(){
    const UserAgent = navigator.userAgent;
    window.alert("User Agent:"+ userAgent);

}

function gotoyoutube(){
    window.open("https://www.youtube.com/");
}