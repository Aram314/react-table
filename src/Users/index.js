import React from 'react';
import { connect } from 'react-redux';
import {fetchUsers, sort} from "./usersActions";

class Users extends React.Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        this.props.dispatch(fetchUsers())
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
                <th>Index</th>
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