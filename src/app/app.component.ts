import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  username: string = '';
  userNames: string[] = [];
  @ViewChild('fom') signupForm!: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  gender = ['male', 'female'];
  user = {
    name: '',
    email: '',
    userName: '',
    questionAnswer: '',
    answer: '',
    gender: '',
  };
  submitted = false;

  suggestUserName(name: string) {
    console.log(name);

    if (name) {
      this.username = name + Math.floor(Math.random() * 10000);

     
    } else {
      this.username = '';
    }
    // this.signupForm.setValue({
    //   userData:{
    //     username:this.suggestUserName,
    //     email:''
    //   },
    // select:'pet',
    // questionAnswer:'',
    // gender:''
    // })

    this.signupForm.form.patchValue({
      userData: {
        username: this.username,
      },
    });
  }

  // onSubmit(fom:NgForm){
  //   console.log(fom);

  // }

  onSubmit() {
    if (this.userNames.includes(this.username)) {
      alert('userName Already Exits!!');
      return
    } else {
      this.userNames.push(this.username);
      console.log(this.userNames);
    }
    console.log(this.signupForm);

    this.submitted = true;
    this.user.userName = this.signupForm.value.userData.username;
    this.user.name = this.signupForm.value.userData.name;
    this.user.email = this.signupForm.value.userData.email;
    this.user.questionAnswer = this.signupForm.value.select;
    this.user.gender = this.signupForm.value.gender;
    this.user.answer = this.signupForm.value.questionAnswer;

    this.signupForm.reset();
  }
}
