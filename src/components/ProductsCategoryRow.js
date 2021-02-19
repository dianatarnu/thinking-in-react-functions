function ProductsCategoryRow(props) {
    const category = props.category;
    
    return(
      <tr>
        <th class="productCategory" colSpan="2">{category}</th>
      </tr>
    );
}

export default ProductsCategoryRow;