var emailInput=document.getElementById("emailInput")
var passInput = document.getElementById("passInput")
var nameInput=document.getElementById("nameInput")
var signUp=document.getElementById("signUp")
var loginBtn=document.getElementById("loginBtn")
var logOut=document.getElementById("logOut")
var welcomeMessage=document.getElementById("welcomeMessage")


var userContainer=[]
if(localStorage.getItem("users")!=null){
  userContainer=JSON.parse(localStorage.getItem("users"));
}

if(signUp !=null){
  signUp.addEventListener("click",signUpSystem)
}if(loginBtn !=null){
 loginBtn.addEventListener("click",loginSystem)
}if(welcomeMessage !=null){
  let user = JSON.parse(localStorage.getItem('userName'))
  welcomeMessage.innerHTML="Welcome" +"  "+ user
}

function signUpSystem(){
    let user={
        name:nameInput.value,
        email:emailInput.value,
        password:passInput.value,
      }
     
      if(nameInput.value==""||emailInput.value==""||passInput.value=="" || emailCheckExist() !=-1){
        if(nameInput.value==""||emailInput.value==""||passInput.value=="" ){
           document.getElementById("alertMessage").innerHTML="all inputs required"
           document.getElementById("alertMessage").style.color="red" 
        }if(emailCheckExist()!=-1){
          document.getElementById("alertMessage").innerHTML="email is already exist"
          document.getElementById("alertMessage").style.color="red" 

        }  
      }else{
        document.getElementById("alertMessage").innerHTML="Success !"
        document.getElementById("alertMessage").style.color="green" 
        userContainer.push(user)
      localStorage.setItem("users",JSON.stringify(userContainer))
      }
}


function emailCheckExist(){
 let res = userContainer.findIndex(ele=>ele.email==emailInput.value);
 
 return res;
}

function loginSystem(){
  let res =userContainer.find(ele=>ele.email== emailInput.value && ele.password==passInput.value);
  if(res== undefined){
      document.getElementById("alertMessage").innerHTML="Email or Password not correct";
      document.getElementById("alertMessage").style.color="red";
  }else{
    localStorage.setItem('userName',JSON.stringify(res.name))
    
    window.location.href='home.html'
  }

}


logOut.addEventListener("click",logOutSystem)
function logOutSystem(){

  
  window.location.href='index.html'
}


// let reg =/^[A-Z][a-z]{3,10}[0-9]?$/;
// let reg2= /^(?=.*\p{Ll})(?=.*\p{Lu})(?=.*[\d|@#$!%*?&])[\p{L}\d@#$!%*?&]{6,36}$/;

 