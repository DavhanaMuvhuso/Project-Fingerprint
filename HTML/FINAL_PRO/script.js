
//username and password variables global declarations



function Validate()
{

  var username = document.getElementById("user").value;
  var password = document.getElementById("pass").value;

  if(username=="admin"&&password=="user")
  {
    alert("login successfuly ");
    document.getElementById("fom").action="./2nd_Page/index.html";
  }
    else
    {
     alert("login Failed ");
    }
    
     

}
