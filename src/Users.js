import React from 'react';

class Users extends React.Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        console.log('mounted')
    }

    render() {
        return (
            <div>
                users
            </div>
        )
    }
}

export default Users;