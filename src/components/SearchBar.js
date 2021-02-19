export default function SearchBar(props) {
    
    return (
        <form class="SearchBar">
            <input 
                id="SearchBox"
                type="text" 
                placeholder="Search.." 
                value={props.filterText} 
                onChange={(e) => props.setFilterText(e.target.value)}
            />
            <label>
                <input 
                    type="checkbox" 
                    checked={props.inStockOnly} 
                    onChange={(e) => props.setInStockOnly(e.target.checked)}
                    />
                    Only show products in stock
            </label>
      </form>
    );
}

