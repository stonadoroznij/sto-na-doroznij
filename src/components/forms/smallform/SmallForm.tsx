'use client'
import { Button, TextInput } from '@/ui'
import { useForm, SubmitHandler } from 'react-hook-form'

interface IFormValues {
    name: string
    phone: number
}

const SmallForm = () => {
    const { register, handleSubmit, reset, formState: {errors} } = useForm<IFormValues>()

    const onSubmit: SubmitHandler<IFormValues> = (data) => {
        console.log(JSON.stringify(data))
        console.log(errors);
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-8 w-full pl-12 pr-12 lg:pl-0 lg:pr-0 lg:max-w-lg"
        >
            <div className="text-2xl font-semibold">Зв’язатися з нами</div>
            <TextInput<IFormValues>
                placeholder="Iм'я"
                label="name"
                register={register}
                required="Iм'я обов'язкове!"
            />
            <TextInput<IFormValues>
                placeholder="Телефон"
                label="phone"
                register={register}
                required
            />
            <Button>Надіслати</Button>
        </form>
    )
}

export default SmallForm
