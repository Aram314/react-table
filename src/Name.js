import React from 'react';
import { connect } from 'react-redux';
import { changeName, saveName } from './Users/usersActions';

class Name extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.myRef = React.createRef();
    }
    handleChange() {
        this.props.dispatch(changeName(this.props.id));
    }
    handleSave() {
        this.props.dispatch(saveName(this.myRef.current.value, this.props.id));
    }
    render() {
        return (
            <span className="name-field">
                {!this.props.changeable ?
                    <span onClick={this.handleChange}>{this.props.children}</span> :
                    <input
                        type="text"
                        defaultValue={this.props.children}
                        ref={this.myRef}
                    />
                }

                {
                    this.props.changeable ?
                        <button onClick={this.handleSave}>Save</button> :
                        ''
                }
            </span>
        )
    }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(Name);