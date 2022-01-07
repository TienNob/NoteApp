import {MdSearch} from 'react-icons/md'

function SearchNote({handleSearch}){
    return(
        <div className="search">
            <MdSearch className="search-icon"/>
            <input 
            className="search-input"
            placeholder="Type to search..."
            onChange={(e) => handleSearch(e.target.value)}
            />
        </div>
    )
}

export default SearchNote