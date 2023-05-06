import { useEffect, useState } from 'react'

export const useLocalstorage = (key, initialValue) => {
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    const item = localStorage.getItem(key)
    if (item) {
      setValue(JSON.parse(item))
    }
  }, [key])

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}
