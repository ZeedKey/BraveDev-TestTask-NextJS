import styled from "styled-components";
import { useState } from "react";
import { Button, Input, Alert, validationSchema } from "..";
import { useRouter } from "next/router";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 2rem;
  padding: 6rem 1.5rem;
  width: 20rem;
  height: 15rem;
  box-shadow: 4px 4px 8px 3px rgba(34, 60, 80, 0.2);

  h2,
  h5 {
    margin: 1rem;
    font-weight: 400;
  }

  h5 {
    margin: 0.7rem;
    opacity: 60%;
  }

  h2 {
    font-size: 3.5ch;
    margin: 0.3rem;
  }
`;

interface IFormProps {
  name: string;
}

const OperatorForm = (props: IFormProps) => {
  const [form, setForm] = useState({
    phone: "",
    money: "",
  });
  const [isDisabled, setIsDisabled] = useState(true);
  const [status, setStatus] = useState("");
  const router = useRouter();

  const getValidity = async () =>
    await validationSchema.isValid({
      phone: form.phone.replaceAll("_", "").trim(),
      money: Number(form.money.replaceAll("RU", "").replaceAll("_", "").trim()),
    });

  const doFormChange = (e: React.ChangeEvent<HTMLFormElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const doFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsDisabled(false);
    if (await getValidity()) {
      setStatus("success");
      if (Math.random() >= 0.5) router.push("/");
    } else {
      setStatus("failed");
    }
  };

  return (
    <Form onSubmit={doFormSubmit}>
      <h2>Оплата</h2>
      <h5>Введите ваш номер телефона и сумму от 1 до 1000 рублей</h5>
      <Input mask="" name="operator" value={props.name} disabled={true} />
      <Input
        name="phone"
        value={form.phone}
        mask="+7 (999) 999 9999"
        onChange={doFormChange}
      />
      <Input
        name="money"
        value={form.money}
        mask="9999 RU"
        onChange={doFormChange}
      />
      <Button type="submit">Отправить</Button>
      <Alert disabled={isDisabled} status={status} />
    </Form>
  );
};

export default OperatorForm;
