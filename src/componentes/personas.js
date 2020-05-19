import React,{Component} from 'react'
import {Formulario} from './Formulario'
import './personas.css'

class Personas extends Component{
  
  s= (edad,nombre,area,img) =>{
   console.log(img.src)
    var divP = document.createElement('div')
    divP.className='divp';
    var divS = document.createElement('div')
    divS.className ='divs'
    var h3 = document.createElement('h1')
    h3.className = 'nombredel'
    var h2 = document.createElement('h2')
    h2.className= 'areasw'
    var h4 = document.createElement('h3')
    h4.className='edadw'
    var imgs = document.createElement('img')
    var divw = document.createElement('div')
    divw.className="se"
    imgs.className= 'icons'
    imgs.src = img.src
    var edades = document.createTextNode(edad)
    var  nombres = document.createTextNode(nombre)
    var areas = document.createTextNode(area)
    document.body.appendChild(divP)
    h3.appendChild(nombres)
    divw.appendChild(h3)
    divP.appendChild(divS)
    divS.appendChild(divw)
    h2.appendChild(areas)
    divS.appendChild(h2)
    divS.appendChild(h4)
    h4.appendChild(edades)
    divS.appendChild(imgs)
    
  }
  render(){
    return(
      
        
<Formulario datos={this.s}/>
        
      
      
      
      
      
    )
  }
}
export {Personas}