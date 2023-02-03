import Head from "next/head";
import { Logo } from "./Logo";
import { Paper } from "@/components/Paper";
import s from "./SignIn.module.css";
import { TextField } from "@/components/TextField";
import { Button } from "@/components/Button";
import { FormEventHandler, useState } from "react";

const errorsInitialState = { email: "", password: "" };

export const SignIn = () => {
  const [errors, setErrors] = useState(errorsInitialState);
  const handleSubmit: FormEventHandler<HTMLFormElement> = (ev) => {
    ev.preventDefault();

    const nextErrors = { ...errorsInitialState };

    const elements = ev.currentTarget.elements;
    const email = elements.namedItem("email") as HTMLInputElement;
    const password = elements.namedItem("password") as HTMLInputElement;

    if (!email.value) {
      nextErrors.email = "Email is required";
    } else if (!email.value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
      nextErrors.email = "Enter a valid email";
    }

    if (!password.value) {
      nextErrors.password = "Password is required";
    } else if (password.value.length < 6) {
      nextErrors.password = "Password must be 6 characters long";
    }

    setErrors(nextErrors);
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main className={s.root}>
        <Paper className={s.paper}>
          <Logo />
          <h1 className={s.title}>Sign in</h1>
          <form className={s.form} onSubmit={handleSubmit}>
            <div>
              <TextField name="email" label="Email" errorMessage={errors.email} placeholder="Email" />
              <TextField
                type="password"
                name="password"
                label="Password"
                errorMessage={errors.password}
                placeholder="Password"
              />
            </div>
            <Button className={s.button} type="submit">
              Login
            </Button>
          </form>
        </Paper>
      </main>
    </>
  );
};
