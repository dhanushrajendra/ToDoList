import { Component } from "react";

export interface IStyles extends WithStyles<typeof styles> {
  classes?: any;
  //   theme?: Theme;
}

export interface IMenuItem {
  value: string;
  label: string;
}
export interface IMainMenuItem {
  name: string;
  icon: ComponentType;
  link: string;
}
