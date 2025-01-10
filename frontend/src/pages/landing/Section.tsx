import c from '@styles/landingPage.module.css';

interface SectionProps {
    title?: string;
    h3: string;
    p: string;
    buttonText: string;
    imgUrl?:string;
    decoration?:string;
    children?:React.ReactNode;
}

export default function Section({
    title,
    h3,
    p,        
    buttonText,
    imgUrl,
    children,
}: SectionProps) {
    return (
        <div className='container'>
            <div className={c.homeSection}>         
                {title && <p className={c.goldTitle}>{title}</p>}
                <h3>{h3}</h3>
                <p>{p}</p>
                <button>{buttonText}</button>
                {imgUrl && <img className={c.sectionImg} src={imgUrl} alt="photo" />}
                {children}
            </div>  
        </div>
    );
}