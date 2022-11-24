import { useSessionContext } from "@supabase/auth-helpers-react";
import { useForm } from "react-hook-form";

type SignInFieldsT = {
  email: string;
  password: string;
};

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFieldsT>();
  const { supabaseClient } = useSessionContext();

  console.log(supabaseClient);
  const onSignIn = async (data: SignInFieldsT) => {
    const { email, password } = data;

    const { data: signInData, error } =
      await supabaseClient.auth.signInWithPassword({
        email: email,
        password: password,
      });
  };

  return (
    <div>
      <h1 className="text-center mb-8 text-3xl">Sign In</h1>
      <form onSubmit={handleSubmit(onSignIn)} className="flex flex-col gap-4">
        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="input-label">
            Email
          </label>
          <input
            id="email"
            className={`input ${errors.email && "input-error"}`}
            {...register("email", { required: true })}
            type="text"
            placeholder="your email address"
          />
          {errors.email && (
            <p className="input-error-message">
              * kindly enter your email address
            </p>
          )}
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label htmlFor="password" className="input-label">
            Password
          </label>
          <input
            id="password"
            className={`input ${errors.password && "input-error"}`}
            {...register("password", { required: true })}
            type="password"
            placeholder="your password"
          />
          {errors.password && (
            <p className="input-error-message">* kindly enter your password</p>
          )}
        </div>

        <button type="submit" className="button">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
