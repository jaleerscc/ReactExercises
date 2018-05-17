import React,{Component} from "react";


class GraphHeader extends Component {

    render(){
        return(
            <div className="card-header">
                <i className="fa fa-line-chart"></i> 
                Line Chart for <strong>y  = {this.props.formula===""?0:this.props.formula}</strong>
            </div>
        );
    }
}
export default GraphHeader;