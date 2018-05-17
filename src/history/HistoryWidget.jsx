import React,{Component} from "react";
import HistoryBody from "./cmp/HistoryBody";
import HistoryFooter from "./cmp/HistoryFooter";
import HistoryHeader from "./cmp/HistoryHeader";


class HistoryWidget extends Component {

    historyClickEvent=(formula)=>{
        this.props.historyClickOperation(formula);
    };

    render(){
        return(
            <div className="card mb-3">
                <HistoryHeader/>
                <HistoryBody hList={this.props.hEntries} historyItemClick={this.historyClickEvent}/>
                <HistoryFooter hList={this.props.hEntries}/>
            </div>
        );
    }
}
export default HistoryWidget;