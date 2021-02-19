import ProductRow from './ProductRow';
import ProductsCategoryRow from './ProductsCategoryRow';

function ProductTable(props) {
    const row = [];
    let lastCategory = null;

    props.products.forEach(product => {
      if (product.category !== lastCategory){
        row.push(
          <ProductsCategoryRow
            category={product.category}
            key={product.category}
          />
        );
      }
      row.push(
        <ProductRow 
          product={product}
          key={product.name}
        />
      );
      lastCategory = product.category;
    });
  
    return(
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{row}</tbody>
        </table>
      );
}

export default ProductTable;