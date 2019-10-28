import React from 'react';
import { connect } from 'react-redux';
import {fetchUsers, sort, check, checkAll, setStatus} from "./usersActions";
import Name from "../Name";

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.handleSort = this.handleSort.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(fetchUsers())
    }

    handleCheck(id) {
        if(id) {
            this.props.dispatch(check(id))
        } else {
            this.props.dispatch(checkAll())
        }
    }

    handleSort(field) {
        this.props.dispatch(sort(field));
    }

    handleSelect(event) {
        this.props.dispatch(setStatus(event.target.value));
    }
    render() {
        const { loading, error, users } = this.props;
        if(error) {
            return (
                <div>Error! {error.message}</div>
            )
        }
        if (loading) {
            return <div>Loading...</div>
        }
        return (
            <div className="container">
                <table>
                    <thead>
                    <tr>
                        <th><input type="checkbox" onChange={() => this.handleCheck()} checked={this.props.checkAll} /></th>
                        <th onClick={() => {this.handleSort('id')}}>
                            Index
                            {this.props.sortIdAsc ?  <span>&darr;</span> : <span>&uarr;</span>}
                        </th>
                        <th onClick={() => {this.handleSort('name')}}>
                            Name
                            {this.props.sortNameAsc ?  <span>&darr;</span> : <span>&uarr;</span>}
                        </th>
                        <th onClick={() => {this.handleSort('date')}}>
                            Date
                            {this.props.sortDateAsc ?  <span>&darr;</span> : <span>&uarr;</span>}
                        </th>
                        <th onClick={() => {this.handleSort('status')}}>
                            Status
                            {this.props.sortStatusAsc ?  <span>&darr;</span> : <span>&uarr;</span>}
                        </th>
                    </tr>
                    {users.data && users.data.map(user => (
                        <tr key={user.id}>
                            <td><input type="checkbox" onChange={() => this.handleCheck(user.id)} checked={user.checked}/></td>
                            <td>{user.id}</td>
                            <td><Name id={user.id} changeable={user.changeable}>{user.name}</Name></td>
                            <td>{new Date(user.date).toDateString()}</td>
                            <td>{user.status}</td>
                        </tr>
                    ))}
                    </thead>
                </table>
                <select value={this.props.status} onChange={this.handleSelect}>
                    <option value="" disabled hidden>Set status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </select>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    users: state.users.items,
    error: state.users.error,
    status: state.users.status,
    loading: state.users.loading,
    sortAsc: state.users.sortAsc,
    checkAll: state.users.checkAll,
    sortIdAsc: state.users.sortIdAsc,
    sortNameAsc: state.users.sortNameAsc,
    sortDateAsc: state.users.sortDateAsc,
    sortStatusAsc: state.users.sortStatusAsc,

});

export default connect(mapStateToProps)(Users);