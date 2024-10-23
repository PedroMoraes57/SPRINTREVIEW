function inputEmail() {
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ 
    if (!emailRegex.test(document.getElementById('email').value)) {
        document.getElementById('email').style.border = '2px solid #e63636'
        document.getElementById('avisoEmail').style.display = 'block'
    }
    else{
        document.getElementById('email').style.border = '1px solid #181818'
        document.getElementById('avisoEmail').style.display = 'none'
    }
     }