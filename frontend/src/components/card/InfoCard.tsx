import c from '@styles/landingPage.module.css';
interface InfoCardProps{
    imgUrl: string;
    heading: string;
    description: string;
}
export default function InfoCard({
    imgUrl,
    heading,
    description,
}: InfoCardProps){
    return(
        <div className={c.workItem}>
            <img src={imgUrl}alt="work img" />
            <h4>{heading}</h4>
            <p>{description}</p>
        </div>               
      
    );
}