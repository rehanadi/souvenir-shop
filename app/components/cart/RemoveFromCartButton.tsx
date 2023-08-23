'use client'

import { toast } from 'react-toastify'
import { BsTrash } from 'react-icons/bs'
import { useDispatch, removeFromCart } from "@/lib/redux"
import type { CartItem } from "@/lib/types"

type RemoveFromCartButtonProps = React.FC<{ item: CartItem }> 

const RemoveFromCartButton: RemoveFromCartButtonProps = ({ item }) => {
  const dispatch = useDispatch()

  const handleRemoveFromCart = (id: string) => {
    if (!confirm(`Are you sure want to delete “${item?.name}” from your cart?`) || !id) return
    
    dispatch(removeFromCart(id))
    toast.success(`Product “${item?.name}” have been deleted from your cart`)
  }

  return (
    <button 
      className='btn btn-danger'
      style={{ marginLeft: '2rem' }} 
      onClick={() => handleRemoveFromCart(item?.id)}
    ><BsTrash /></button>
  )
}

export default RemoveFromCartButton
