import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ICredentialOptions } from './credential-options';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'sitamat-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() loginClick: EventEmitter<any> = new EventEmitter<any>();
  @Input() title: string;
  @Input() description: string;
  @Input() subDescription: string;
  @Input() loginCaption: string;
  loginForm: FormGroup;
  private _languageOptions: string[];
  private _credentials: ICredentialOptions[];

  @Input('credentials')
  set credentials(v: ICredentialOptions[]) {
    this._credentials = v;
    for (const item of this.credentials) {
      if (!item.value) {
        item.value = '';
      }
      const ctl = this.fb.control(item.value, Validators.required);
      this.loginForm.addControl(item.name, ctl);
    }
  }

  get credentials(): ICredentialOptions[] {
    return this._credentials;
  }

  @Input('languageOptions')
  set languageOptions(v: string[]) {
    this._languageOptions = v;
    this.loginForm.patchValue({language: v[0]});
  }

  get languageOptions(): string[] {
    return this._languageOptions;
  }

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      language: ['', Validators.required]
    });
    this.title = 'title';
    this.description = 'description';
    this.subDescription = 'subDescription';
  }

  ngOnInit() {
  }

  submitLogin() {
    this.loginClick.emit(this.loginForm.value);
  }
}
