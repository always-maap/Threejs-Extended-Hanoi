import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { HanoiSolver } from "../lib/ex-hanoi";
import { useContext } from "react";
import { HanoiContext } from "./_app";
import styled from "styled-components";

type Inputs = {
  ringInPeg: number;
};

export default function Home() {
  const { register, handleSubmit } = useForm<Inputs>();
  const { push } = useRouter();
  const [_, setHanoiHistory] = useContext(HanoiContext);

  const onSubmit = async (data: Inputs) => {
    setHanoiHistory(new HanoiSolver(+data.ringInPeg).history);
    await push(`/app?ringInPeg=${data.ringInPeg}`);
  };

  return (
    <Root>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="ringInPeg">Select the number of rings in each peg</label>
        <input defaultValue={3} {...register("ringInPeg")} type="number" min={1} max={6} />
      </Form>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #000;
  background-image: url("https://astralapp.com/dist/images/header-stars.svg");
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  label {
    font-size: 1.5rem;
    color: #fff;
    margin-bottom: 0.5rem;
    font-weight: 900;
  }
  input {
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: none;
    background-color: #fff;
    font-size: 1.15rem;
    color: #000;
    margin-bottom: 1rem;
    width: 30%;
  }
`;
