import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { HanoiSolver } from "../lib/ex-hanoi";
import { useContext } from "react";
import { HanoiContext } from "./_app";

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("ringInPeg")} />
    </form>
  );
}
