function addEmail(){
    email_address = document.getElementById("email_address").value;
    localStorage.setItem("email_address",email_address);
    window.location='Kwitter_room.html';
}