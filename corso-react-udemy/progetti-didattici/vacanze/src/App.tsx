

import './App.css'
import Holiday from './components/Holiday'

function App() {
  
  return (
    <>
    <main>
      <div className="p-10 text-center">
        <h1 className="  border-b-4 pb-5 border-cyan-600 font-bold text-black text-3xl">Le Nostre Vacanze</h1>
      </div>

      <section className=" h-full p-10">

        <div className='container flex justify-center'>
        <Holiday>
        </Holiday>
        </div>

      </section>
    </main>
      
    </>
  )
}

export default App
