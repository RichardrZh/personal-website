import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data: any) => {
        console.log(data);
        sendEmail(data);
    };
    const onErrors = (errors: any) => console.log(errors);

    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current!, 'YOUR_PUBLIC_KEY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <form ref={form} onSubmit={handleSubmit(onSubmit, onErrors)}
              className="grid">
            <div>
                <label>First Name</label>
                <input type="text" {...register('first-name')} />
            </div>
            <div>
                <label>Last Name</label>
                <input type="text" {...register('last-name')} />
            </div>
            <div>
                <label>Email</label>
                <input type="email" {...register('email')} />
            </div>
            <div>
                <label>Message</label>
                <input type="text" {...register('message')} />
            </div>
      <button>Submit</button>
        </form>
    )
}