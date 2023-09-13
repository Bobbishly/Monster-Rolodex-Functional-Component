import './SearchFilter.css'

const SearchFilter = ({ SearchFilterOnSearchChange, newClassname, newPlaceholder }) => {
    return(
        <div>
            <input 
                className={ newClassname }
                type="search"
                placeholder={ newPlaceholder }
                onChange={ SearchFilterOnSearchChange }
            />
        </div>
    )
}

export default SearchFilter;