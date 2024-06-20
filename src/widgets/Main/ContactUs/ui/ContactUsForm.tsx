import { AuthField } from "../../../../features/Auth/ui/AuthField/AuthField";
import { useForm } from "../../../../shared/lib/useForm";
import { Button } from "../../../../shared/ui/Button";
import styles from "./ContactUs.module.scss";

interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
}

const ContactUsForm = () => {
  const {
    handleSubmit,
    register,
    hasErrors,
    formState: { errors }
  } = useForm<FormData>({
    name: "",
    email: "",
    phoneNumber: ""
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <AuthField
        errors={errors}
        type="text"
        placeholder="Name"
        {...register("name", { required: true })}
      />
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
        type="phoneNumber"
        {...register("phoneNumber", {
          required: true
        })}
        placeholder="Phone number"
      />
      <Button theme="default">Sign up</Button>
    </form>
  );
};

export default ContactUsForm;
