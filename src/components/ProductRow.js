function ProductRow(props) {
    const product = props.product;
    const name = product.stocked ? product.name : <span style={{color: "red"}}>{product.name}</span>;

    return(
        <tr>
          <td class="productCell">{name}</td>
          <td class="productCell">{product.price}</td>
        </tr>
      );
}

export default ProductRow;