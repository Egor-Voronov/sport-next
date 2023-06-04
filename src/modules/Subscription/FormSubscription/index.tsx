import type { FC } from "react";
import { useState } from "react";
import { Button, rem, Text, TextInput, ThemeIcon } from "@mantine/core";
import { useStyles } from "./styles";
import { useForm } from "react-hook-form";
import type { FormData } from "./types";
import { TbCheck } from "react-icons/tb";

export const FormSubscription: FC = () => {
  const { classes } = useStyles();
  const { register, handleSubmit, reset } = useForm<FormData>();

  const [isSubscribed, setIsSubscribed] = useState(false);
  const onSubmit = (data: FormData) => {
    setIsSubscribed(true);
    reset();
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
            placeholder={
              isSubscribed
                ? "Вы уже подписались на рассылку"
                : "Введите ваш email"
            }
            classNames={{
              input: classes.input,
              root: classes.inputWrapper,
            }}
            disabled={isSubscribed}
          />
          <Button
            type="submit"
            className={classes.control}
            disabled={isSubscribed}
          >
            Подписаться
          </Button>
        </div>

        {isSubscribed && (
          <span className={classes.subscriptionContainer}>
            <ThemeIcon size={20} color="green" radius="xl">
              <TbCheck size={rem(15)} />
            </ThemeIcon>
            <Text color="green">Вы успешно подписались на рассылку!</Text>
          </span>
        )}
      </form>
    </>
  );
};
