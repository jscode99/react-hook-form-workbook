import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

let reRenders = 0;

interface FormValues {
  username: string;
  email: string;
  channel: string;
}

export const YouTubeForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  reRenders += 1;

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted", data);
  };
  return (
    <div>
      <h1>YouTube Form {reRenders / 2}</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          {...register("username", {
            required: {
              value: true,
              message: "Please enter a valid username",
            },
          })}
        />
        <p className="error-class">{errors.username?.message}</p>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          {...register("email", {
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Please enter a valid email address",
            },
            required: {
              value:true,
              message:"This field is required"
            }
          })}
        />
        <p className="error-class">{errors.email?.message}</p>
        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          id="channel"
          {...register("channel", {
            required: {
              value: true,
              message: "Please enter a valid channel name",
            },
          })}
        />
        <p className="error-class">{errors.channel?.message}</p>
        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};
