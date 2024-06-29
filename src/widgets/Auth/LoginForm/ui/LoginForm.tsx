import { useForm } from "../../../../shared/lib/useForm";
import { AuthField } from "../../../../features/Auth/ui/AuthField/AuthField";
import AppLink from "../../../../shared/ui/AppLink/AppLink";
import { Button } from "../../../../shared/ui/Button";
import { Field } from "../../../../shared/ui/Field";
import Hr from "../../../../shared/ui/Hr/Hr";
import AuthForm from "../../../../entities/Auth/ui/Form/AuthForm";
import styles from "./LoginForm.module.scss";
import { FC } from "react";

interface FormData {
  email: string;
  password: string;
}

const LoginForm: FC = () => {
  const {
    handleSubmit,
    register,
    hasErrors,
    formState: { errors }
  } = useForm<FormData>({
    email: "",
    password: ""
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className={styles.authWrapper}>
      <AuthForm onSubmit={handleSubmit(onSubmit)} title="Welcome back!">
        <Button theme="primaryOutlined" fullWidth>
          Continue with Google
        </Button>
        <Hr />
        <div className={styles.or}>OR</div>
        <AuthField
          errors={errors}
          type="email"
          {...register("email", {
            required: true,
            regex: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
          })}
          placeholder="Email"
        />
        <AuthField
          errors={errors}
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        <div className={styles.wrapper}>
          <AppLink to={"/"}>Forget password?</AppLink>
        </div>
        <Button fullWidth>Log in</Button>
      </AuthForm>
      <div className={styles.link}>
        <span>
          Dont have an account? <AppLink to={"/register"}>Sign up</AppLink>
        </span>
      </div>
    </div>
  );
};

export default LoginForm;
