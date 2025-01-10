// import c from './../../styles/inputField.module.css';
// import { ChangeEventHandler } from 'react';

// interface InputFieldProps {
//     label: string;
//     inputId: string;
//     placeholder: string;
//     value: string;
//     onChange: ChangeEventHandler<HTMLInputElement>;
//     type?: string;
//     error?: string;
// }
import c from '@styles/landingPage.module.css';

// export default function InputField({
//     label,
//     inputId,
//     placeholder,
//     value,
//     onChange,
//     type = 'text',
//     error,
// }: InputFieldProps) {
interface SectionProps {
    title?: string;
    h3: string;
    p: string;
    buttonText: string;
    imgUrl?:string;
}

export default function Section({
    title,
    h3,
    p,        
    buttonText,
    imgUrl,
}: SectionProps) {
    return (
        <div className='container'>
            <div className={c.homeSection}>         
                {title && <p className={c.goldTitle}>{title}</p>}
                <h3>{h3}</h3>
                <p>{p}</p>
                <button>{buttonText}</button>
                {imgUrl && <img className={c.sectionImg} src={imgUrl} alt="photo" />}
            </div>  
        </div>
    );
}