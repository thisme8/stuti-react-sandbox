import { useState } from "react"

export default function useItemFields() {
  const [hideItems, setHideItems] = useState(false)
  const [itemInput, setItemInput] = useState("")
  const [items, setItems] = useState<string[]>([])

  //for items
  function addItem() {
    if (itemInput.trim() !== "") {
      setItems((prev) => [...prev, itemInput])
      setItemInput("")
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newItems = [itemInput.trim() && `${itemInput}`].filter(Boolean)

    setItems((prev) => [...prev, ...newItems])

    setItemInput("")
  }

  const handleHideItems = () => {
    setHideItems((prev) => !prev)
  }

  return {
    items,
    itemInput,
    hideItems,
    setItemInput,
    handleHideItems,
    addItem,
    handleSubmit,
  }
}
