import React from "react";
import Switch from "@material-ui/core/Switch";

export default function SwitchBox(props) {
  return <Switch onChange={props.onChange}></Switch>;
}
