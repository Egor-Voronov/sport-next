import type { FC } from "react";
import { Button, TextInput } from "@mantine/core";
import { useStyles } from "./styles";
import { useForm } from "react-hook-form";
import type { FormData } from "./types";

export const FormSubscription: FC = () => {
  const { classes } = useStyles();
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    alert(JSON.stringify(data));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.controls}>
          <TextInput
            type="email"
            {...register("email", {
              required: true,
            })}
            placeholder="Ваш email"
            classNames={{
              input: classes.input,
              root: classes.inputWrapper,
            }}
          />
          <Button type="submit" className={classes.control}>
            Подписаться
          </Button>
        </div>
      </form>
    </>
  );
};
