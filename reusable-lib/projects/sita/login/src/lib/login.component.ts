import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn } from '@angular/forms';
import { FieldConfig } from "./field.interface";


@Component({
  selector: 'sita-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnChanges {
  
  loginForm: FormGroup;
  @Input() fields: FieldConfig[] = [];
  @Input() title: string;
  @Input() loginError: string;
  @Input() loginBgImage: string;
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();

  switch: boolean;
  constructor(private fb: FormBuilder) {
    
  }
  ngOnChanges(c: any) {
    console.log(c);
  }
  ngOnInit() { 
    if (typeof this.fields === 'string') {
      // REACT COMPAT FIX: try to convert string back to array
      this.fields = JSON.parse(this.fields);
    }

    // default validation for email
    const email = this.fields.find(r => r.name === 'email');
    if (email && !email.validations) {
      email.validations = [
        {
          name: "required",
          validator: Validators.required,
          message: "Email Required"
        },
        {
          name: "pattern",
          validator: Validators.pattern(
            "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
          ),
          message: "Invalid email"
        }
      ];
    }

    // default validation for username
    const username = this.fields.find(r => r.name === 'username');
    if (username && !username.validations) {
      username.validations = [
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
      ];
    }
    // default validation for password
    const password = this.fields.find(r => r.name === 'password');
    if (password && !password.validations) {
      password.validations = [
        {
          name: "required",
          validator: Validators.required,
          message: "Password Required"
        }
      ];
    }
    // default validation for date of birth
    const dob = this.fields.find(r => r.name === 'dob');
    if (dob && !dob.validations) {
      dob.validations = [
        {
          name: "required",
          validator: Validators.required,
          message: "Date of Birth Required"
        }
      ];
    }
    this.loginForm = this.createControl();
    
    const theWitchName = this.fields.find( r => r.name === 'ldap');   
    this.loginForm.valueChanges.subscribe(r => {
      if (theWitchName) {
        this.switch = this.loginForm.get(theWitchName.name).value;
      } 
    });
  }

  onSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.loginForm.valid) {
      this.submit.emit(this.loginForm.value);
    } else {
      this.validateAllFormFields(this.loginForm);
    }
  }

  createControl() {
    const group = this.fb.group({});
    this.fields.forEach(field => {
      if (field.type === "button") return;
      const control = this.fb.control(
        field.value,
        this.bindValidations(field.validations || [])
      );
      group.addControl(field.name, control);
    });
    return group;
  }

  bindValidations(validations: any): ValidatorFn {
    if (validations.length > 0) {
      const validList = function *(array: any[]) {
        for (var item of array) {
            yield item.validator;
        }
      };
      return Validators.compose(Array.from(validList(validations)));
    }
    return null;
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }
}
