import styles from "@/styles/TextInput.module.css";
import { useId } from "react";

interface ITextProperties {
    element: "input" | "textarea",
    properties: React.InputHTMLAttributes<HTMLInputElement> | React.TextareaHTMLAttributes<HTMLTextAreaElement>
}

export default function TextInput({
    label,
    textProperties
}: {
    label: string,
    textProperties: ITextProperties
}) {

    const id = useId();

    switch (textProperties.element) {
        case "input":
            const inputProps = textProperties.properties as React.InputHTMLAttributes<HTMLInputElement>;
            var textElement = <input id={id} 
                                     name={inputProps.name} 
                                     placeholder="" 
                                     required={inputProps.required}
                                     type={inputProps.type} />;
            break;

        case "textarea":
            const textareaProps = textProperties.properties as React.TextareaHTMLAttributes<HTMLTextAreaElement>;
            var textElement = <textarea id={id} 
                                        name={textareaProps.name} 
                                        placeholder="" 
                                        required={textareaProps.required} 
                                        spellCheck={textareaProps.spellCheck}
                                        rows={textareaProps.rows}/>;
            break;
    }

    return (
         <div className={`relative w-full z-10 text-black ${styles.textContainer}`}>   
            {textElement} 

            <label htmlFor={id} className="absolute top-0 left-0 z-50 text-gray-500 text-xs ml-1">
                {label}
            </label>
        </div>
    )
}