import React from 'react'
import {Link} from 'react-router-dom'
import logo from './logo.png'
const Nav = props => (
 <nav className="navbar navbar-inverse" style={{width: '100%', margin: 0}}>
 <div className="container-fluid">
 <div className="navbar-header">
 <button type="button" className="navbar-toggle" data-toggle="collapse" datatarget="#myNavbar">
 <span className="icon-bar"></span>
 <span className="icon-bar"></span>
 <span className="icon-bar"></span>
 </button>
 <Link className="navbar-brand" to="/">DebtsApp</Link>
 </div>
 <div className="collapse navbar-collapse" id="myNavbar">
 <ul className="nav navbar-nav">
 <li className="active"><Link to="/debts">Añadir Deuda</Link></li>
 <li className="active"><Link to="/home">Inicio</Link></li>
 <li className="active"><Link to="/details">Calendario de Deudas</Link></li>
 </ul>
 <ul className="nav navbar-nav navbar-right">
 <li><Link to="/signup"><span className="glyphicon glyphicon-user"></span>
Regístrate</Link></li>
 <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span>
Inicia sesión</Link></li>
 </ul>
 </div>
 </div>
</nav>
)
export default Nav
