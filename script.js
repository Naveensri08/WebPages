// show password function.

function showPwd() {
    var x = document.getElementById('pwd');
    var y = document.getElementById('pwdbtn');
    if(x.getAttribute("type") != "password")
    {
        x.setAttribute('type','password');
        y.innerHTML = '<i class="fas fa-lock"></i>';
    }
    else{
        x.setAttribute('type','text');
        y.innerHTML = '<i class="fas fa-unlock-alt"></i>';
    }
}