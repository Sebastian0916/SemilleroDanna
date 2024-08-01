import type {MenuItem2} from "../types"
type MenuItemProps ={
  item:MenuItem2
}

export default function MenuItems({item}: MenuItemProps) {
  return (
    <>
    <p>{item.name}</p>
    <p className="font-black">{item.price}</p>
    </>
  )
}
