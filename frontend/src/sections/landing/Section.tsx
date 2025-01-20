import c from '@styles/landingPage.module.css';

interface SectionProps {
    title?: string;
    heading: string;
    description: string;
    buttonText?: string;
    buttonAction?: React.MouseEventHandler<HTMLButtonElement>;
    imgUrl?:string;
    decoration?:string;
    children?:React.ReactNode;
    id:string;
}

export default function Section({
    title,
    heading,
    description,
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
                <h3 className={c.sectionHeading}>{heading}</h3>
                <p className={c.sectionDescription}>{description}</p>
                {imgUrl && <img className={c.sectionImg} src={imgUrl} alt="photo" />}
                {buttonText && <button className={`button ${c.landingPageBtn}`} onClick={buttonAction}>{buttonText}</button>}
                {children}
            </div>
        </div>
    );
}
