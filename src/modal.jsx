import { useRef,useEffect } from "react"
import { createPortal } from "react-dom"
const Modal = ({children}) => {
    const element = useRef(null)
    if (!element.current){
        element.current = document.createElement('div')
    }
    useEffect(()=> {
        document.getElementById('modal').appendChild(element.current)
        return () => {document.getElementById('modal').removeChild(element.current)}
    } ,[])
    return createPortal(<div className="Modal">{children}</div>,element.current)
}
export default Modal;