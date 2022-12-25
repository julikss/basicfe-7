import './style.css';

const GoodsCard = ({ link, name, price }) => {
    return (
        <li className="card">
            <img src={link} alt={name} />
            <p>{name}</p>
            <p>Ціна: {price}</p>
        </li>
    )
}

export default GoodsCard;