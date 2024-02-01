"use client"
import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from "@/styles/EmailForm.module.css";

export default function EmailForm({
    children,
    className
}: {
    children: React.ReactNode,
    className?: string
}) {
    const [loading, setLoading] = useState(false);

    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm('service_frnbr5i', 'template_liwufcm', form.current!, 'wNpNJnEDHp9YnfhqK')
        .then((result) => {
            setLoading(false);

            // log and show success
            console.log(result.text);
        }, (error) => {
            setLoading(false);

            // log and show error
            console.log(error.text);
            
        });
    };

    useEffect(() => {
        emailjs.init("wNpNJnEDHp9YnfhqK");
    }, []);

    return (
        <form ref={form} onSubmit={sendEmail} className={`flex flex-col gap-4 ${className}`}>

            {children}

            {loading ? 
                <input type="submit" value="..." className={`bg-blue-600 w-[12ch] px-3 py-2 text-center ${styles.submit}`}  disabled={true}/>
                :
                <input type="submit" value="Send Email" className={`bg-red-600 w-[12ch] px-3 py-2 text-center ${styles.submit}`}/>
            }
            
        </form>
    )
}