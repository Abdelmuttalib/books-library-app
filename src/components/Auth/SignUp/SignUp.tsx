import { useSessionContext } from "@supabase/auth-helpers-react";
import { useForm } from "react-hook-form";

type SignInFieldsT = {
  email: string;
  password: string;
};

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFieldsT>();
  const { supabaseClient } = useSessionContext();

  const onSignUp = async (data: SignInFieldsT) => {
    const { email, password } = data;

    const { data: signUpData, error } = await supabaseClient.auth.signUp({
      email: email,
      password: password,
    });
  };

  return (
    <div>
      <h1
        style={{ textAlign: "center", marginBottom: "2rem" }}
        className="text-center mb-8"
      >
        Sign Up
      </h1>
      <form onSubmit={handleSubmit(onSignUp)} className="flex flex-col gap-4">
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
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
