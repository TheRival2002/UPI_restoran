import c from '@styles/landingPage.module.css';
interface InfoItemProps{
    imgUrl: string;
    header: string;
    description: string;
}
export default function InfoItem({
    imgUrl,
    header,
    description,
}: InfoItemProps){
    return(
        <div className={c.workItem}>
            <img src={imgUrl}alt="work img" />
            <h4>{header}</h4>
            <p>{description}</p>
        </div>               
      
    );
}