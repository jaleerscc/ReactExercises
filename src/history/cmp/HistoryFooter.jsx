import React,{Component} from "react";


class HistoryFooter extends Component {

    render(){
        if(this.props.hList.length>0){
            return(<div className="card-footer small text-muted">
            Last updated on <strong>{this.props.hList[this.props.hList.length-1].ts}</strong>
            </div>);
        }
        else {
            return(<div className="card-footer small text-muted">No recent entries</div>);
        }
        
    }
}
export default HistoryFooter;