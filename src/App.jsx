import React from "react"
import Header from "./components/Header"
import Main from "./components/Main"

function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export default App

// export default: Pode ser importado sem chaves e com qualquer nome

// export "sem default" deve ser importado com chaves e com o nome exportado