function adduser(){
    var user_name=document.getElementById("user_name1").value
    localStorage.setItem("save_username", user_name)
    window.location="kwitter_room.html"
}