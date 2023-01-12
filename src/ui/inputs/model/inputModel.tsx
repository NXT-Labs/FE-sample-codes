export interface Input {
  showLabel?: boolean;
  label?: string;
  name?: string;
  id?: string | undefined;
  value?: string | number;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  type?: string;
  setValue?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event) => void;
}

export interface selectInput {
  showLabel?: boolean;
  label?: string;
  name?: string;
  id?: string | undefined;
  value?: string | number;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  type?: string;
  setValue?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
  options?: selectOption[]
}

export interface selectOption {
  label?: string | number;
  value?: string | number;
}

export interface checkboxInput {
  showLabel?: boolean;
  label?: string;
  name?: string;
  id?: string | undefined;
  value?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  type?: string;
  setValue?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean
}