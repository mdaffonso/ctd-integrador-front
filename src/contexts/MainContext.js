import {createContext, useState} from 'react'
import Meta from "../components/Meta"

export const MainContext = createContext()

export const MainProvider = ({children}) => {
  const [ title, setTitle ] = useState("Início")
  const [ favicon, setFavicon ] = useState("/images/rettiwt.png")

  const switchFavicon = () => {
    const faviconMatrix = new Map()
    faviconMatrix.set("/images/rettiwt.png", "/images/twitter.png" )
    faviconMatrix.set("/images/twitter.png", "/images/rettiwt.png")
    setFavicon(current => faviconMatrix.get(current))
  }

  const value = {
    title,
    setTitle,
    favicon,
    switchFavicon
  }

  return (
      <MainContext.Provider value={value}>
        <Meta title={title} favicon={favicon} />
        {children}
      </MainContext.Provider>
  )
}