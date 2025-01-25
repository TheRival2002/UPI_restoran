import c from './../../styles/filterCard.module.css';

type FilterCardProps = {
    imgUrl: string;
    name: string;
    onClick: () => void;
    isClicked: boolean;
}

export default function FilterCard({ imgUrl, name, onClick, isClicked }: FilterCardProps) {
    return <div className={`${c.filterCard} ${isClicked && c.activeFilterCard}`} onClick={onClick}>
        <img src={imgUrl} height={32} width={32}></img>
        <h4>{name}</h4>
    </div>;
}
