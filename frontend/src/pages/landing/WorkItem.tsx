import c from '@styles/landingPage.module.css';
interface WorkItemProps{
    imgUrl: string;
    header: string;
    description: string;
}
export default function WorkItem({
    imgUrl,
    header,
    description,
}: WorkItemProps){
    return(
        <div className={c.workItem}>
            <img src={imgUrl}alt="work img" />
            <h4>{header}</h4>
            <p>{description}</p>
        </div>               
      
    );
}