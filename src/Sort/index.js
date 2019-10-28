import React from 'react';
import { connect } from 'react-redux';
import { sortIndex } from "./sortActions";

class Sort extends React.Component {
    render() {
        return (
            <div onClick={() => this.props.dispatch(sortIndex())}>{this.props.sortIndexAsc ? <span>&darr;</span> : <span>&uarr;</span>}</div>
        )
    }
}

const mapStateToProps = state => ({
    sortIndexAsc: state.sort.sortIndexAsc
});

export default connect(mapStateToProps)(Sort)