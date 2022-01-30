import styled from "styled-components";
const CustomButton = styled.button`
  font-weight: 600;
  font-size: 1.6ch;
  font-family: Roboto;
  width: fit-content;
  background-color: rgb(102, 187, 106);
  outline: none;
  border: none;
  padding: 0.2rem 0.6rem;
  border-radius: 3px;
  margin: 1rem;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  font-family: inherit;
  font-weight: 500;
  font-size: 0.8rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  transition: 1s;
`;

interface ICustomButtonProps {
  type: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}
function Button(props: ICustomButtonProps) {
  return (
    <CustomButton onClick={props.onClick} type={props.type}>
      {props.children}
    </CustomButton>
  );
}

export default Button;
