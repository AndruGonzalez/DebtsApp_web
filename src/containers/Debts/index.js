import React from 'react'
import {Link} from 'react-router-dom'
import api from '../../helpers/api'
import Layout from '../../components/Layout/'
import Debt from './Debt'
class Debts extends React.Component {
 state = {process: false, list: []}
 componentDidMount = () => {
 this.load()
 }
 load = () => {
 this.setState({process: true}, () => {
 api('debts')
 .then(res => this.setState({process: false, list: res.data}))
 .catch(err => {
 console.log(err);
 this.setState({process: false, err: 'problemas de conexión'})
 })
 })
 }
 render = () => {
 const emptyEl = <div>No hay Deudas</div>
 return (
 <Layout>
 <h1>Deudas</h1>
 <div className="text-right">
 <Link className="btn-debtsapp" to='/debts/new'>Crear Deuda +</Link>
 </div>
 <div className="col-md-6">
 {this.state.process ? <div>Cargando...</div> : null}
 {this.state.list.length
 ? this.state.list.map(debt => <Debt key={album._id} {...debt} />)
 : emptyEl}
 </div>
 </Layout>
 )
 }
}
export default Debt
