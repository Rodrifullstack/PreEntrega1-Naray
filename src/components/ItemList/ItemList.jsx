import Item from "../Item/Item"

const ItemList = ({products}) => {
  return (
    <div className="container text-center">
      <div className="row g-2">
        {
          products.map( prod => {
            return  <Item key={prod.id} {...prod} />
          })
        }
      </div>
    </div>
  )
}

export default ItemList