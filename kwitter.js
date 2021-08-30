function save_user(){
    username = document.getElementById("name").value;
    localStorage.setItem("user_name_key",username);
    window.location="kwitter_room.html";
}