var logindata;

window.onload = function() {
    execCarrocel();
    addlogindata();
    setInterval(function(){
        clickleft();
    },3000);
};

function execCarrocel(){
    var elements = document.getElementsByClassName("carrocel_img");
    for(let index = 0; index <= elements.length - 1; index++) {
        elements[index].style = "display:none";
    }        

    if(document.getElementsByClassName("carrocel_img").length > 1)
    {
        document.getElementsByClassName("carrocel_img")[0].style = "display:block;";
    }

}

function clickleft()
{
    var elements = document.getElementsByClassName("carrocel_img")
    for(let index = 0; index <= elements.length - 1; index++) {
        if(index == 0)
        {
            if(elements[index].style.display == "block")
            {
                elements[elements.length - 1].style = "display:block;"
                elements[index].style = "display:none;"
            }
        }
        else{
            if(elements[index].style.display == "block")
            {
                elements[index - 1].style = "display:block;"
                elements[index].style = "display:none;"
            }
        }
    } 
}

function clickright()
{
    var elements = document.getElementsByClassName("carrocel_img")
    for(let index = elements.length - 1; index >= 0; index--) {
        if(index == elements.length - 1)
        {
            if(elements[index].style.display == "block")
            {
                elements[index].style = "display:none;"
                elements[0].style = "display:block;"
            }
        }
        else{
            if(elements[index].style.display == "block")
            {
                elements[index].style = "display:none;"
                elements[index + 1].style = "display:block;"
            }
        }
    } 
}

function openlogin()
{
    document.getElementById('login').style.display = 'block';
}

function addlogindata()
{
    let tjson = '[{"email":"emanueli_rizzo@hotmail.com","senha":"123"},{"email":"luis.akira.i@gmail.com","senha":"123"}]';
    logindata = JSON.parse(tjson);
}

function sendlogin()
{  
    let flaglogin = false;  

    var json = logindata;
    json.forEach(element => {
        if(document.getElementById('lemail').value == element.email)
        {
            if(document.getElementById('lpassword').value == element.senha)
            {
                flaglogin = true;
            }
        }
    });

    if(flaglogin)
    {
        window.location.replace("./servicos.html");
    }
}