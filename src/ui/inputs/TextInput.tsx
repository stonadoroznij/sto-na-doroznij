import { FieldValues, Path, UseFormRegister } from 'react-hook-form'

type PropsType<T extends FieldValues> = {
  label: Path<T>
  register: UseFormRegister<T>
  error?: string
  placeholder: string
}

const TextInput = <T extends FieldValues>({
  label,
  register,
  error,
  placeholder,
}: PropsType<T>) => {
  return (
    <div className="relative">
      <input
        placeholder={`${placeholder}`}
        className="w-full bg-transparent pb-2 outline-none border-b border-white rounded-none focus:border-accent-yellow placeholder:text-coal-300"
        {...register(label)}
      />
      {error && (
        <div className="w-full text-red-400 text-xs absolute top-9 left-0">{`${error}`}</div>
      )}
    </div>
  )
}

export default TextInput
