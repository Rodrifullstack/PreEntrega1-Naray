
const CartItem = ({ id, name, price, quantity }) => {
  return (
    <div>
      
      <ul style={{ listStyleType: 'none', padding: 0, margin: 0, overflow: 'hidden' }}>
        <li style={{ float: 'left', marginRight: '10px' }}>`Producto: ${id}`</li>
        <li style={{ float: 'left', marginRight: '10px' }}>`Producto: ${name}`</li>
        <li style={{ float: 'left', marginRight: '10px' }}>`Cantidad: ${quantity}`</li>
        <li style={{ float: 'left', marginRight: '10px' }}>`Precio: ${price}`</li>
        <li style={{ float: 'left', marginRight: '10px' }}>`Subtotal: ${price * quantity}`</li>
      </ul>


    </div>
  )
}

export default CartItem