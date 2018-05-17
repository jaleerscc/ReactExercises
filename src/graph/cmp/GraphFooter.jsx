import React,{Component} from "react";


class GraphFooter extends Component {

    render(){
        return(
            <div className="card-footer small text-muted">Last refresh: {new Date().toLocaleString()}</div>
        );
    }
}
export default GraphFooter;