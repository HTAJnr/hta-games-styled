var ok = true;
function verify(user) {
    try {
        if (user === "") throw "Alert ⚠\nUsername and Password cannot be empty";
    } catch (error) {
        alert(error)
        ok = false;
    }
}
function welcome() {
    var senha = verify(document.querySelector('#senha').value);
    var nome = document.querySelector('#name').value;
   
    alert("Welcome, "+nome+"!");
}