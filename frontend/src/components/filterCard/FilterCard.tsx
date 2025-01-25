import c from './../../styles/filterCard.module.css';

type FilterCardProps = {
    imgUrl: string;
    name: string;
}

export default function FilterCard({ imgUrl, name }: FilterCardProps) {

    return <div className={c.filterCard}>
        <img src={imgUrl} height={32} width={32}></img>
        <h4>{name}</h4>
    </div>;
}
