import { useForm } from "react-hook-form";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  function onSubmit(data) {
    console.log(data);
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>userName</label>
        <input
          type="text"
          {...register("userName", {
            required: "Username is required",
            minLength: { value: 3, message: "At least 3 characters required" },
          })}
        />
        {errors.userName && (
          <p
            style={{
              color: "red",
            }}
          >
            {errors.userName.message}
          </p>
        )}
        <label>email</label>
        <input
          type="email"
          {...register("email", {
            required: "enter email correctly",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && (
          <p
            style={{
              color: "red",
            }}
          >
            {errors.email.message}
          </p>
        )}
        <label>password</label>
        <input
          type="password"
          {...register("password", { required: "password is required" })}
        />
        {errors.password && (
          <p style={{ color: "red" }}>{errors.password.message}</p>
        )}
        <label>Confirm Password</label>
        <input
          type="password"
          {...register("confirmPassword", {
            required: "password did not matched",
            validate: (value) =>
              value === watch("password") || "please type correct password",
          })}
        />
        {errors.confirmPassword && (
          <p
            style={{
              color: "Red",
            }}
          >
            {errors.confirmPassword.message}
          </p>
        )}

        <input type="submit" />
      </form>
    </div>
  );
}

export default RegisterForm;
