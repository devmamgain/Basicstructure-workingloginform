let submit = document.querySelector(".submit")
let namess = document.getElementById("nameimp")
let email = document.getElementById("emailimp")
let password = document.getElementById("passwordimp")
let nflag,eflag,pflag;

submit.addEventListener("click", (e) => {
    e.preventDefault()
if(namess.value === "")
{
    document.getElementById("notname").style.visibility = "visible"
    nflag =false
}
else{
    document.getElementById("notname").style.visibility = "hidden"
    nflag=true
}
if(email.value === "")
{
    document.getElementById("notemail").style.visibility = "visible"
    eflag=false
}
else{
    document.getElementById("notemail").style.visibility = "hidden"
    
if(email.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
{
    document.getElementById("notmatchemail").style.visibility = "hidden"
    eflag = true
}
else{
    document.getElementById("notmatchemail").style.visibility = "visible"
    eflag=false

}
}
if(password.value === "")
{
    document.getElementById("notpassword").style.visibility = "visible"
    pflag=false
}
else{
    document.getElementById("notpassword").style.visibility = "hidden"
    if(password.value.match( /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/))
    {
        document.getElementById("notmatchpassword").style.visibility = "hidden"
        pflag =true
    }
    else
    {
        document.getElementById("notmatchpassword").style.visibility = "visible"
        pflag=false

    }
}
if(nflag && pflag && eflag)
{
    window.location.href = "/suc.html"
}


})