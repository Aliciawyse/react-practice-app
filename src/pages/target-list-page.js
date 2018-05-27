import React, { Component } from 'react';
import { connect } from 'react-redux';

import TargetList from '../components/target-list';
import { fetchTargets } from '../actions/tartget-actions';



class TargetListPage extends Component {

    componentDidMount() {
        this.props.fetchTargets();
    }


    render () {
        return (
            <div>
                <h1>List of target companies</h1>
                <TargetList targets={this.props.targets}/>
            </div>
        )
    }
}

// Make contacts  array available in  props
function mapStateToProps(state) {
    return {
        targets : state.targetStore.targets
    }
}

export default connect(mapStateToProps, {fetchTargets})(TargetListPage);
