import styled from "styled-components";
import InputMask from "react-input-mask";
import React from "react";

const CustomInput = styled(InputMask)`
  font-size: 2ch;
  font-weight: 300;
  margin: 0.3rem;
`;

interface ICustomInputProps {
  name: string;
  value?: string;
  mask: string | (string | RegExp)[];
  onChange?: React.ChangeEventHandler;
  disabled?: boolean;
}

function Input(props: ICustomInputProps) {
  const maskChar = props.mask === undefined ? "" : props.mask;
  return (
    <CustomInput
      value={props.value}
      mask={props.mask}
      maskChar=" "
      name={props.name}
      onChange={props.onChange}
      disabled={props.disabled}
    />
  );
}

export default Input;
