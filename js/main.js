// var text = document.getElementById('text')
// text.title = "New text"
// console.log(text.title)
// text.style.color = "red"
// text.style.backgroundColor = "blue"
// text.innerHTML = "New<br>string"

// var spans = document.getElementsByTagName('span')
// var spans = document.getElementsByClassName('simple-text')
// for (var i=0;i<spans.length;i++){
//     console.log(spans[i].innerHTML)
// }



// +++++++++++

document.getElementById('main-form').addEventListener("submit" , checkForm);

function checkForm(event){
    event.preventDefault();
    var el  = document.getElementById('main-form');
    var name = el.name.value;
    var pass = el.password.value;
    var repass = el.repass.value;
    var state = el.state.value;
    var fail = "";
    // console.log(state + "-" + pass + "-" + repass);
    if(name == "" || password == "" || repass == "")
        fail = "fill in all fields";
    else if(name.length <= 1 || name.length > 50 )
        fail = "Enter the correct name  ";
    else if(pass != repass)
        fail = "password and repassword are different"
    else if(pass.split("&").length > 1)
        fail = "Password is not correct";
    if(fail != "")
        document.getElementById('error').innerHTML = fail;
    else{
        alert("Everything OK!");
        window.location = 'https://itproger.com'

    }
    // return false;
}

