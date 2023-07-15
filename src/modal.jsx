import { useRef,useEffect } from "react"
import { createPortal } from "react-dom"
const Modal = ({children}) => {
    const element = useRef(null)
    if (!element.current){
        element.current = document.createElement('div')
    }
    useEffect(()=> {
        document.getElementById('modal').appendChild(element.current)
        return () => {document.removeChild(element.current)}
    } ,[])
    return createPortal(<>{children}</>,element.current)
}
export default Modal