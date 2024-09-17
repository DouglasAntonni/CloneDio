import { ReactNode } from "react";

export interface IInput extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
  lefticon?: ReactNode;
  name: string;
  control: any;
  errorMessage?: string;
}