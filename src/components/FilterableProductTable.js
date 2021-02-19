import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import { useState } from 'react';

function FilterableProductTable(props) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] =useState(false);
  let filteredProducts = filterProducts(props.products, filterText);
  filteredProducts = filterInStock(filteredProducts, inStockOnly);

    return(
        <div class="FilterableProductTable">
          <SearchBar
            setFilterText={setFilterText}
            filterText={filterText}
            inStockOnly={inStockOnly}
            setInStockOnly={setInStockOnly}
          />
          <ProductTable  
            products={filteredProducts}
            filterText={filterText}
            inStockOnly={inStockOnly}
          />
        </div>
      );
}

function filterProducts(products, filterText) {
  if(filterText===""){
    return products;
  }
  else{
    return products.filter(product => product.name.toUpperCase().includes(filterText.toUpperCase()))
  }
}

function filterInStock(products, inStockOnly) {
    if(inStockOnly === false){
      return products;
    }
    else {
      return products.filter(product => product.stocked === true)
    }
}

export default FilterableProductTable;