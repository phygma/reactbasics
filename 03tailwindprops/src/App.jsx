import Card from './components/Card'
import './App.css'

function App() {
  

  return (
    <>
      <h1 className='md:flex w-auto text-3xl bg-green-500 p-3' >Vite with tailwind</h1>
      <Card username="Hitesh Choudhary" post="Staff Engineer"/>
      <Card username="Aman Arora" post="SDE"/>
      <Card/>

    </>
  )
}

export default App
