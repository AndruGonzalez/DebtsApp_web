import React from 'react'
import {Link} from 'react-router-dom'
import api from '../../helpers/api'
import Layout from '../../components/Layout/'
import Confirm from '../../components/Confirm/'
class DebtsForm extends React.Component {
 state = {process: false, err: '', card: '', name: '', description: '', cards: [], modal: false}
 componentDidMount = () => {
 if (this.props.match.params.id) this.load()
 else this.loadCards()
 }
 change = e => {
 const type = e.target.type
 const value = type === 'file' ? e.target.files[0] : e.target.value
 this.setState({[e.target.id]: value})
 }
 load = e => {
 const id = this.props.match.params.id
 this.setState({process: true}, () => {
 Promise.all([
 api('debts/' + id),
 api('cards/')
 ])
 .then(([albums, cards]) => this.setState({
 process: false,
 ...debts.data[0],
 debt: debts.data[0].card ? debts.data[0].card._id :
card.data[0]._id,
 card: card.data
 }))
 .catch(err => {
 console.log(err);
 this.setState({process: false, err: 'problemas de conexión'})
 })
 })
 }
 loadCards = e => {
 this.setState({process: true}, () => {
 api('cards/')
 .then(res => this.setState({process: false, card: res.data[0]._id, cards:
res.data}))
 .catch(err => {
 console.log(err);
 this.setState({process: false, err: 'problemas de conexión'})
 })
 })
 }
 create = (e) => {
 const {name, card, monto, enterprise, fechavenc} = this.state
 const data = new FormData()
 data.append('name', name)
 data.append('card', card)
 data.append('monto', monto)
 data.append('enterprise', enterprise)
 data.append('fechavenc', fechavenc)
 this.setState({process: 'save'}, () => {
 api({
 url: 'debts',
 method: 'post',
 body: data
 })
 .then(res => this.props.history.push('/debts'))
 .catch(err => {
 console.log(err);
 this.setState({process: false, err: err.data.message})
 })
 })
 }
 update = (e) => {
 const {_id, name, card, monto, enterprise, fechavenc} = this.state
 const data = new FormData()
 if (name) data.append('name', name)
 if (card) data.append('card', card)
 if (monto) data.append('monto', monto)
 if (enterprise) data.append('enterprise', enterprise)
 if (fechavenc) data.append('fechavenc', fechavenc)
 this.setState({process: 'save'}, () => {
 api({url: 'debts/' + _id, method: 'put', body: data})
 .then(res => this.props.history.push('/debts'))
 .catch(err => {
 console.log(err);
 this.setState({process: false, err: err.data.message})
 })
 })
 }
 delete = (e) => {
 const {_id} = this.state
 this.setState({process: 'delete'}, () => {
 api({url: 'debts/' + _id, method: 'delete'})
 .then(res => this.props.history.push('/debts'))
 .catch(err => {
 console.log(err);
 this.setState({process: false, err: err.data.message})
 })
 })
 }
 toggleModal = () => this.setState({modal: !this.state.modal})
 render = () => {
 return (
 <Layout>
 {this.state.modal ? <Confirm delete={this.delete} toggle={this.toggleModal}
/> : null}
 <div className="col-md-offset-3 col-md-6">
 <h2 className="text-center">Nueva Deuda</h2><br />
 <form className="lazyForms">
 <div className='form-group'>
 <select
 className='form-control'
id='card'
 value={this.state.card}
 onChange={this.change}>
 {this.state.card.map(card => <option value={card._id}
key={card._id}>{card.name}</option>)}
 </select>
 </div>
 <div className='form-group'>
 <input
 className='form-control'
 id='name'
 placeholder='Nombre'
value={this.state.name}
 onChange={this.change}
 />
 </div>
 <div className='form-group'>
 <input
 className='form-control'
 id='card'
 placeholder='Numero de Tarjeta'
value={this.state.card}
 onChange={this.change}
 />
 </div>
 <div className='form-group'>
 <input
 className='form-control'
 id='monto'
placeholder='Monto'
 value={this.state.monto}
 onChange={this.change}
 />
 </div>
 <div className='form-group'>
 <input
 className='form-control'
 id='enterprise'
placeholder='Empresa'
 value={this.state.enterprise}
 onChange={this.change}
 />
 </div>
 <div className='form-group'>
 <input
 className='form-control'
 id='fechavenc'
placeholder='Fecha de Vencimiento'
 value={this.state.fechavenc}
 onChange={this.change}
 />
 </div>
 <div>{this.state.err}</div>
 <div className="row">
 <div className="col-xs-6 text-right">
 <button type='button' className='btn-debtsapp btn-danger'
onClick={this.toggleModal}>
 {this.state.process === 'delete' ? 'Cargando...': 'Eliminar'}
 </button>
 </div>
 <div className="col-xs-6 text-left">
 <button type='button' className='btn-debtsapp' onClick={this.state._id
? this.update : this.create}>
 {this.state.process === 'save' ? 'Cargando...': 'Guardar'}
 </button>
 </div>
 </div>
 </form>
 </div>
 </Layout>
 )
 }
}
export default DebtsForm
