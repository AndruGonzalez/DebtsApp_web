import React from 'react'
import {Link} from 'react-router-dom'
import Layout from '../../components/Layout/'
import Card from './Card'
import api from '../../helpers/api'
class Cards extends React.Component {
 state = {process: false, list: []}
 componentDidMount = () => {
 this.load()
 }
 load = () => {
 this.setState({process: true}, () => {
 api('cards')
 .then(res => this.setState({process: false, list: res.data}))
 .catch(err => {
 console.log(err);
 this.setState({process: false, err: err.message})
 })
 })
 }
 render = () => {
 const emptyEl = <div>No hay registros</div>
 return (
 <Layout>
 <h1>Tarjetas</h1>
 <div className="text-right">
 <Link className="btn-debtsapp" to='/card/new'>Registrar Tarjeta +</Link>
 </div>
 <div className="col-md-6">
 {this.state.process ? <div>Cargando...</div> : null}
 {this.state.list.length
 ? this.state.list.map(ard => <Card key={card._id} {...card} />)
 : emptyEl}
 </div>
 </Layout>
 )
 }
}
export default Cards
