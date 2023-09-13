import './CardComponent.css'

const CardComponent = ({ monsters: { id, name, email } }) => {
    // const { id, name, email } = monsters
    // Two different ways of debugging this

    return(
        <div key={id} className='card-container'>
            <img alt={`monsters ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
            <h1>{name}</h1>
            <p>{email}</p>
        </div>
    )
}

export default CardComponent;