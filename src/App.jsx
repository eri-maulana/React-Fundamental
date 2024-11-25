
import './App.css'
import Article from './components/Article'

function App() {

  return (
    <>
      <Article name="Eri" titles={["React.js", "Next.js"]}/>
      <br />
      <Article name="Maulana" titles={["Front End", "Back End"]}/>
    </>
  )
}

export default App
