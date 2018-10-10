import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Validators } from '@angular/forms';
import { FieldConfig } from 'sita-ui/sita/login';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  fields: FieldConfig[];
  languages: string[];
  selectedNav = 1;
  loginError: string;
  backgroundImage: string;

  constructor() {
    this.languages = [ "en-US", "fr-FR"];
    this.backgroundImage = 'url(https://betterairus.com/wp-content/uploads/2018/02/inside-airport-wallpaper-50123-51810-hd-wallpapers-1024x576.jpg)';
    this.fields = [
      // {
      //   type: "radiobutton",
      //   label: "Gender",
      //   name: "gender",
      //   options: ["Male", "Female"],
      //   value: "Male"
      // },
      // {
      //   type: "date",
      //   label: "DOB",
      //   name: "dob",
      //   validations: [
      //     {
      //       name: "required",
      //       validator: Validators.required,
      //       message: "Date of Birth Required"
      //     }
      //   ]
      // },
      // {
      //   type: "checkbox",
      //   label: "Accept Terms",
      //   name: "term",
      //   value: true
      // },
      // {
      //   type: "input",
      //   label: "Email Address",
      //   inputType: "email",
      //   name: "email",
      //   validations: [
      //     {
      //       name: "required",
      //       validator: Validators.required,
      //       message: "Email Required"
      //     },
      //     {
      //       name: "pattern",
      //       validator: Validators.pattern(
      //         "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
      //       ),
      //       message: "Invalid email"
      //     }
      //   ]
      // },
      {
        type: "select",
        label: "Site",
        name: "site",
        value: "ABC",
        options: ["ABC", "UAE", "UK", "US"]
      },      
      {
        type: "input",
        label: "Username",
        inputType: "text",
        name: "username",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "Name Required"
          },
          {
            name: "pattern",
            validator: Validators.pattern("^[a-zA-Z]+$"),
            message: "Accept only text"
          }
        ]
      },      
      {
        type: "input",
        label: "Password",
        inputType: "password",
        name: "password",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "Password Required"
          }
        ]
      },
      {
        type: "switch",
        label: "LDAP Auth",
        name: "ldap",
        value: false,
        textAlign: "right"
      },
      {
        type: "button",
        label: "Login",
        textAlign: "center"
      }
    ];
   }

  ngOnInit() {
  }
  selectItem(id: number) {
    this.selectedNav = id;
  }
  setLanguage(language: string) {
      console.log(`setting language ${language}`);
  }
  login(values: any){
    console.log(values);
    this.loginError = "login error, check your credential";
  }
}
