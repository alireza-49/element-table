import { useState,useRef ,useEffect} from 'react'
import './App.css'
import data from './data.js'
import Context from './contex'
import Element from './element'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Modal from './modal.jsx'
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';

function App() {
  const query = new QueryClient({
    queries:{
      cacheTime:Infinity,
      staleTime:Infinity, 
    }
  })
  const [modal,setModal] = useState([false,{}])
  const [data_orgnized,setData_orgnized] = useState([])
  const guide = [2,8,8,18,18,32,32]
  const orgnized = useRef([[],[],[],[],[],[],[],[],[]])
  const eleNumber = useRef(0)
  const index = useRef(0)
  function orgnize (){
    eleNumber.current = 0
    guide.forEach((count) => {
      for (let i = 0; i < count; i++) {
        const name = data.order[eleNumber.current]
        orgnized.current[index.current]  = [...orgnized.current[index.current], data[name]]
        eleNumber.current++
        
      }
      index.current++;
    })
    orgnized.current[7] = orgnized.current[5].splice(2,14)
    orgnized.current[8] = orgnized.current[6].splice(2,14)
  }
  useEffect(() => {
    orgnize()
    setData_orgnized(orgnized.current)
  },[])
  return (
    <Context.Provider value={[modal,setModal]}>
    <div className='header'> 
      
         
    </div>
    {modal[0] ?(
      <Modal >
          <div className='modal-container'>
            <div id='but'>            <h1>{modal[1].name}</h1>
<button onClick={() => setModal([false,'hydrogen'])}><CloseFullscreenIcon /></button></div>
            <div>
              <img src={modal[1].bohr_model_image} alt="" />
              <div>
                <h3>atomic mass:{modal[1].atomic_mass}</h3>
                <h3>{modal[1].appearance}</h3>
              </div>
            </div>
            <h4>summary:{modal[1].summary}</h4>
          </div>
      </Modal>
    ):null}
    <div className='content'>
      <div className='container'>
        {data_orgnized.map((item,index) => {
          if (index === 0){
            return (
              <div className='row row1' key={index}>
              <div className="group1"><Element key={item[0].name} data={item[0]}/></div>
              <div className='group2'><Element key={item[1].name} data={item[1]}/></div>
              </div>
              )
          }
          else if (index > 0 && index < 7){
            return(
            <div className={'row row' + guide[index]} key={index}>
              <div className='group1'>
              <Element key={item[0].name} data={item[0]}/>
              <Element key={item[1].name} data={item[1]}/>

              </div>
              <div className='group2'>
              {item.map((element,index) => {
                if (index === 0 || index === 1){return(
                    null
                  )}
                else {
                  return(
                    <Element key={element.name} data={element}/>
                  )
                }
                })}
                </div>
            </div>)
          }
          else{
              if (index == 7){
                return(
                  <>
                  <div className="space"></div>

                  <div className='rowfinals' key={index}>
                    {item.map((element)=>{
                      return(<Element key={element.name} data={element}/>)
                    })} 
                  </div>
                  </>
                  )
              }
              return(
              <div className='rowfinals' key={index}>
                {item.map((element)=>{
                  return(<Element key={element.name} data={element}/>)
                })} 
              </div>)
          }
        })}
    </div>
    </div>
    </Context.Provider>
  )
}

export default App
