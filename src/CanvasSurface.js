import React, { useRef } from 'react'
import CanvasDraw from "react-canvas-draw"
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import { useGlobal } from 'reactn'
import Fab from '@material-ui/core/Fab'


import './CanvasSurface.css'

const CanvasSurface = () => {

 const defaultProps = {
  loadTimeOffset: 5,
  lazyRadius: 30,
  brushRadius: 12,
  brushColor: "#444",
  catenaryColor: "#0a0302",
  gridColor: "rgba(150,150,150,0.17)",
  hideGrid: true,
  canvasWidth: '100vw',
  canvasHeight: '100vh',
  disabled: false,
  imgSrc: "",
  saveData: null,
  immediateLoading: false
 }

  let canvas = useRef(null)
  const clear = () => { canvas.clear() }
  const [open,showSpicker] = useGlobal('spicker')

  return (
   <>
    <CanvasDraw
     ref={canvasDraw => (canvas = canvasDraw)}
     canvasWidth={'100vw'}
     canvasHeight={'100vh'}
     hideGrid={true}
    />
    <Button variant="outlined" onClick={clear} className="clear">
      <Icon>clear_all</Icon> Neu
    </Button>
    <Fab className="spicker" onClick={()=>{showSpicker(true)}}>
    <Icon>add</Icon>
      </Fab>
   </>
  )
}


export default CanvasSurface
