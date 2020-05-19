import React,{Component} from 'react'
import ninja from '../img/ninja.png'
import persona1 from '../img/persona.png'
import mujer from '../img/mujer.png'
import afro from '../img/afro.png'
import afrom from '../img/afrom.png'
import lentes from '../img/lentes.png'
import barba from '../img/barba.png'



import './Formulario.css'
class Formulario extends Component{
  sub = e=>{
   console.log('hola')
    this.props.datos(document.querySelector('.edad').value,document.querySelector('.nombre').value,document.querySelector('.area').value,document.querySelector('.ninjas'))
  }
  sub1 = e=>{
    console.log('hola')
     this.props.datos(document.querySelector('.edad').value,document.querySelector('.nombre').value,document.querySelector('.area').value,document.querySelector('.persona'))
   }
   sub2 = e=>{
    console.log('hola')
     this.props.datos(document.querySelector('.edad').value,document.querySelector('.nombre').value,document.querySelector('.area').value,document.querySelector('.mujer'))
   }
   sub3 = e=>{
    console.log('hola')
     this.props.datos(document.querySelector('.edad').value,document.querySelector('.nombre').value,document.querySelector('.area').value,document.querySelector('.afro'))
   }
   sub4 = e=>{
     console.log('hola')
      this.props.datos(document.querySelector('.edad').value,document.querySelector('.nombre').value,document.querySelector('.area').value,document.querySelector('.afrom'))
    }
    sub5 = e=>{
     console.log('hola')
      this.props.datos(document.querySelector('.edad').value,document.querySelector('.nombre').value,document.querySelector('.area').value,document.querySelector('.lentes'))
    }
    sub6 = e=>{
      console.log('hola')
       this.props.datos(document.querySelector('.edad').value,document.querySelector('.nombre').value,document.querySelector('.area').value,document.querySelector('.barba'))
     }

  render(){ 
    return(
      <div id = 'sev'>
        <h1 id="c">LISTA DE TRABAJADORES DE REDIT</h1>
        <link href="https://fonts.googleapis.com/css?family=Lobster|Prompt" rel="stylesheet"></link>
      <form >
      <input type='text' className = 'nombre' name="nombre" placeholder='NOMBRE'></input>
      <input type='text' className = 'area' name="area" placeholder="AREA"></input>
      <input type='text' className = 'edad' name="edad" placeholder = 'EDAD'  >
      </input>
      <div id="avatar">
      <h2 id = 'y'>ELIJE A TU AVATAR</h2>
      <img src={ninja} onClick={this.sub} className='ninjas' ></img>
      <img src={persona1} onClick={this.sub1} className='persona' ></img>
      <img src={mujer} onClick={this.sub2} className='mujer'></img>
      <img src={afro} onClick={this.sub3} className='afro' ></img>
      <img src={afrom} onClick={this.sub4} className='afrom' ></img>
      <img src={lentes} onClick={this.sub5} className='lentes'></img>
      <img src={barba} onClick={this.sub6} className='barba'></img>
      </div>
      
      </form>
      </div>
     
    )
    

  }
  
}

export {Formulario}
