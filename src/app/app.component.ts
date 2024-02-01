import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('fom') signupForm!: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  gender = ['male', 'female'];
  user={
    name:'',
    email:'',
    userName:'',
    questionAnswer:'',
    answer:'',
    gender:''
  }
  submitted=false
  suggestUserName(name:string) {
    const suggestUserName =name + Math.floor(Math.random()*10000 )
    // this.signupForm.setValue({
    //   userData:{
    //     username:suggestUserName,
    //     email:''
    //   },
    // select:'pet',
    // questionAnswer:'',
    // gender:''
    // })

    this.signupForm.form.patchValue({
      userData:{
        username:suggestUserName
      }
    });
  }

  // onSubmit(fom:NgForm){
  //   console.log(fom);

  // }

  onSubmit() {
    console.log(this.signupForm);
    
    this.submitted=true
    this.user.userName=this.signupForm.value.userData.username;
    this.user.name=this.signupForm.value.userData.name;
    this.user.email=this.signupForm.value.userData.email;
    this.user.questionAnswer=this.signupForm.value.select;
    this.user.gender=this.signupForm.value.gender;
    this.user.answer=this.signupForm.value.questionAnswer;


    this.signupForm.reset();
  }
}
