import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

type Inputs = {
  ringInPeg: number;
};

export default function Home() {
  const { register, handleSubmit } = useForm<Inputs>();
  const { push } = useRouter();

  const onSubmit = (data: Inputs) => push(`/app?ringInPeg=${data.ringInPeg}`);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("ringInPeg")} />
    </form>
  );
}
