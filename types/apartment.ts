import { InventoryItem } from './inventory-item'

export interface Apartment {
  id: number | string
  address: string
  imageUrl: string
  floor: number
  door: number
  inventory: InventoryItem[]
}
