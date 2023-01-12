export interface primaryButton {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  value?: string;
  className?: string;
  alt?: string;
  disabled?: boolean
}

export interface primaryIconButton {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  value?: string;
  className?: string;
  image?: string;
  imageDim?: {
    width: number | string;
    height: number | string;
  }
  alt?: string
}