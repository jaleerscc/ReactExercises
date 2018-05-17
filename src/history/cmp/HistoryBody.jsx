import React,{Component} from "react";


class HistoryBody extends Component {

    render(){
        let historyItems=[];
        for(let i=this.props.hList.length-1;i>=0;i--){
            historyItems.push(
                <a className="list-group-item list-group-item-action" key={this.props.hList[i].key} onClick={()=>this.props.historyItemClick(this.props.hList[i].exp)}>
                    <div className="media">
                    <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/45x45" alt=""/>
                    <div className="media-body">
                     Graph plotted for <strong>{this.props.hList[i].exp}</strong>.
                    <div className="text-muted smaller">{this.props.hList[i].ts}</div>
                     </div>
                </div>
                </a>
            );
        }
        return(
            <div className="list-group list-group-flush small">
                {historyItems}                            
            </div>
        );
    }
}

export default HistoryBody;