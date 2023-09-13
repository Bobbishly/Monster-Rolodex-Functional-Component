import CardComponent from "../CardComponent/CardComponent";
import './CardList.css'

const CardList = ({ monsters }) => {
    return(
        <div className="card-list">
            {monsters.map((monsters) => {
                return(
                    <CardComponent monsters = { monsters } />
                )
            })}
        </div>
    )
}

export default CardList;