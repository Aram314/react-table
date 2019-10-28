import React from 'react';
import { connect } from 'react-redux';
import {fetchUsers, sort, sort1} from "./usersActions";

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.customSort = this.customSort.bind(this);
    }


    componentDidMount() {
        this.props.dispatch(fetchUsers())
    }

    customSort() {
        this.sorted = this.props.users.data;
        this.sorted = [{data:[{id:52,name:'asdf',date:'2012-08-05',status:'active'}]}];
        console.log(this.sorted,'sorted array');
        return(this.sorted)
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
        console.log(users.data);

        return (
        <table className="table">
            <thead>
            <tr>
                <th onClick={this.props.dispatch(sort1(this.customSort()))}>Index</th>
                <th>Name</th>
                <th>Date</th>
                <th>Status</th>
            </tr>
            {users.data && users.data.map(user => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{new Date(user.date).toDateString()}</td>
                    <td>{user.status}</td>
                </tr>
            ))}
            </thead>

        </table>
        )
    }
}

const mapStateToProps = state => ({
    users: state.users.items,
    loading: state.users.loading,
    error: state.users.error
});

export default connect(mapStateToProps)(Users);