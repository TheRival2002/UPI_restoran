import c from '@styles/landingPage.module.css';

interface SectionProps {
    title?: string;
    h3: string;
    p: string;
    buttonText?: string;
    buttonAction?: React.MouseEventHandler<HTMLButtonElement>;
    imgUrl?:string;
    decoration?:string;
    children?:React.ReactNode;
    id:string;
}

export default function Section({
    title,
    h3,
    p,        
    buttonText,
    buttonAction,
    imgUrl,
    children,
    id,
}: SectionProps) {
    return (
        <div className='container' id={id}>
            <div className={c.homeSection}>         
                {title && <p className={c.goldTitle}>{title}</p>}
                <h3>{h3}</h3>
                <p>{p}</p>
                {buttonText && <button onClick={buttonAction}>{buttonText}</button>}
                {imgUrl && <img className={c.sectionImg} src={imgUrl} alt="photo" />}
                {children}
            </div>  
        </div>
    );
}