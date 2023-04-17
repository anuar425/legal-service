import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Input from "../input";
import Button from "../button";

function ApplicationForm() {
  const [phone, setPhone] = useState("");

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const sendForm = (data) => {
    console.log(data);
  };

  return (
    <>
      <div>
        <h3 className=" text-2xl font-semibold mb-4 ">Form title</h3>
        {/* <p className="text-yellow-600 ">Form description</p> */}
      </div>
      <form onSubmit={handleSubmit(sendForm)} className="flex flex-col gap-4">
        <Input
          label="Имя"
          type="text"
          placeholder="Введите ФИО"
          name="name"
          error={errors.name}
          register={{
            ...register("name", {
              required: "Поле обязательно для заполнения",
              minLength: {
                value: 5,
                message: "Минимальное количество символов 5",
              },
              pattern: {
                value:
                  /^(?=.{1,100}$)[A-Za-zА-Яа-яӘәІіҢңҒғҮүҰұӨөҚқ\s]+(?:[-'][A-Za-zА-Яа-яӘәІіҢңҒғҮүҰұӨөҚқ\s]+)?$/,
                message: "Неправильный формат имени",
              },
            }),
          }}
        />
        <div className="flex flex-col gap-2">
          <p className="text-lg">Телефон</p>
          <Controller
            name="phone"
            control={control}
            rules={{
              required: "Поле обязательно для заполнения",
              minLength: {
                value: 11,
                message: "Минимальное количество символов 11",
              },
            }}
            render={({ field: { onChange, onBlur, value, name } }) => (
              <PhoneInput
                country={"kz"}
                onlyCountries={["kz"]}
                containerClass={`border border-gray-300 h-14 w-full focus:outline-none focus:border-yellow-600 ${
                  errors?.phone && "border-red-600"
                }`}
                inputClass=" !w-full !border-0 !h-full pr-2"
                buttonClass="!border-0 !border-r !h-full"
                inputProps={{
                  name: name,
                }}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
          />
          {errors.phone && (
            <p className="text-sm text-red-600">{errors.phone?.message}</p>
          )}
        </div>
        <Input
          label="Email"
          type="text"
          placeholder="Введите email"
          name="email"
          error={errors.email}
          register={{
            ...register("email", {
              required: "Поле обязательно для заполнения",
              minLength: {
                value: 5,
                message: "Минимальное количество символов 5",
              },
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/,
                message: "Неправильный формат почтового ящика",
              },
            }),
          }}
        />
        <div className="flex flex-col gap-2">
          <p className="text-lg">Общие вопросы/комментарии</p>
          <textarea
            type="text"
            rows={6}
            className="border border-gray-300 p-2 w-full focus:outline-none focus:border-yellow-600"
            {...register("question")}
          />
        </div>
        <Button type="submit">Отправить</Button>
      </form>
    </>
  );
}

export default ApplicationForm;
