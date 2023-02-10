const password = document.getElementById("password")
const cpassword = document.getElementById("cpassword")
const pass = document.querySelectorAll(".match")




cpassword.addEventListener("input", (event)=> {
    if (password.value != cpassword.value){
        pass.item(0).innerHTML = "* passwords does not match"
        pass.item(1).innerHTML = "* passwords does not match"
        pass.item(0).classList.remove("styled")
        pass.item(1).classList.remove("styled")
    } else {
        pass.item(0).innerHTML = "Passwrods Matched"
        pass.item(1).innerHTML = "Passwords Matched"
        pass.item(0).classList.add("styled")
        pass.item(1).classList.add("styled")
    }
})