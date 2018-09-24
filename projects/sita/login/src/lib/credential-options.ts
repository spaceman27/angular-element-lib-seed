export interface ICredentialOptions {
  type: string;
  name: string;
  caption: string;
  dropdownList: string[];
  value: string;
}

export const TYPE_PASSWORD = 'password';
export const TYPE_DROPDOWN = 'dropdown';
export const TYPE_TEXT = 'text';
