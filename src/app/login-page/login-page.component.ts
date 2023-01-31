import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{
  signupUsers:any[]=[];
  signupObj:any =
  {
    userName:'',
    email:'',
    password:''
  };
  loginObj:any = {
    userName:'',
    password:''
  };
constructor(){ }

ngOnInit(): void {
  const localData =localStorage.getItem('signupUsers');
  if(localData !=null){
    this.signupUsers=JSON.parse(localData);
  }
}
onSignUp(){
this.signupUsers.push(this.signupObj);
localStorage.setItem('signUpUsers',JSON.stringify(this.signupUsers));
this.signupObj={
  userName:'',
  email:'',
  password:'',

}
};

onLogin(){
  debugger
const isUserExist=this.signupUsers.find(m =>m.userName ==this.loginObj.userName && m.password == this.loginObj.password)
if(isUserExist!=undefined){
  alert('user login Successfully');
}else{
  alert('wrong ')
}
}
}

