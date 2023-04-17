function Input({
  register,
  label = "label",
  error = false,
  name = "inputname",
  type = "text",
  placeholder = "placeholder",
}) {
  return (
    <>
      <div className="flex flex-col gap-2">
        <p className="text-lg">{label}</p>
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className={`border border-gray-300 h-14 px-2 w-full focus:outline-none focus:border-yellow-600 ${
            error && "border-red-600"
          }`}
          {...register}
        />
        {error && <p className="text-sm text-red-600">{error?.message}</p>}
      </div>
    </>
  );
}

export default Input;
