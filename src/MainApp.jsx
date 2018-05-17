import React, { Component } from 'react';
import SearchBar from "./misc/SearchBar";
import GraphWidget from "./graph/GraphWidget";
import HistoryWidget from "./history/HistoryWidget";
import MainAppFooter from "./misc/MainAppFooter";

class MainApp extends Component {
  state={
    exp:"",
    fHistory:[],
    cfg:{
      xRange:{
        xMin:-500,
        xMax:500,
        xTick:50
      }
    }
  };

  /**
   * Load the formula history from local storage and bind event to store the history while quitting
   */
  componentWillMount(){

    let localCache=localStorage.getItem("fCache");
    if(localCache && localCache!==""){
      this.setState({fHistory:JSON.parse(localCache)});
    }
    window.addEventListener(
      "beforeunload",
      ()=>{
        if(this.state.fHistory.length>0){
          localStorage.setItem("fCache",JSON.stringify(this.state.fHistory));
        }  
      }
    );

  }

  render() {

    return (
            <div className="content-wrapper">
              <div className="container-fluid">
                <SearchBar searchFunction={this.addFormula} historySearchKey={this.state.exp}/>
                <div className="row">
                  <div className="col-lg-8">                    
                    <GraphWidget formula={this.state.exp} config={this.state.cfg} modifyXRange={this.changeXAxis}/>                    
                  </div>
                  <div className="col-lg-4">
                    <HistoryWidget hEntries={this.state.fHistory} historyClickOperation={this.historyReload}/>
                  </div>
                </div>
              </div>
              <MainAppFooter/>
      </div> 
    );
  }

  /**
   * Load a previously used formula from history
   */
  historyReload=(formula)=>{
    this.setState({exp:formula});
  };

  /**
   * Evaluate a new formula and trigger a new graph draw
   */
  addFormula=(formulaExp)=>{

    this.setState({exp:formulaExp.userInput});
    if(formulaExp.userInput!==""){
     
      this.setState(
        {
          fHistory:this.state.fHistory.concat(
            {
              exp:formulaExp.userInput,
              key:"hf"+this.state.fHistory.length,
              ts:new Date().toLocaleString()
            }
          )
        }
      );
    }

  };

  /**
   * Change the range of X axis, including ticks
   */
  changeXAxis=(newX)=>{

    this.setState({
      exp:this.state.exp,
      fHistory:this.state.fHistory,
      cfg:{
        xRange:{
          xMin:newX.xMinVal!==""?parseInt(newX.xMinVal,10):-500,
          xMax:newX.xMaxVal!==""?parseInt(newX.xMaxVal,10):500,
          xTick:newX.xTickVal!==""?parseInt(newX.xTickVal,10):50
        }
      }
    });
  };

}
export default MainApp;
