import React,{Component} from "react";
import GraphCanvas from "./GraphCanvas";

class GraphBody extends Component {

    state={
        xVals:{
            xMinVal:-500,
            xMaxVal:500,
            xTickVal:50
        }
    };

    updateRange=(event)=>{
        let nVal=event.target.value;
        switch(event.target.id){
            case "xmin":
                this.setState({xVals:{xMinVal:nVal,xMaxVal:this.state.xVals.xMaxVal,xTickVal:this.state.xVals.xTickVal}});
            break;
            case "xmax":
                this.setState({xVals:{xMinVal:this.state.xVals.xMinVal,xMaxVal:nVal,xTickVal:this.state.xVals.xTickVal}});
            break;
            case "xtick":
                this.setState({xVals:{xMinVal:this.state.xVals.xMinVal,xMaxVal:this.state.xVals.xMaxVal,xTickVal:nVal}});
            break;
            case "xru":
                this.props.xAxisUpdate(this.state.xVals);
            break;
            default:
            break;
        }

    };

    printGraph=()=>{
        let content = document.getElementById('pbox').innerHTML;
        let mywindow = window.open('', 'Print', 'height=600,width=800');    
        mywindow.document.write('<html><head><title>Print</title>');
        mywindow.document.write('</head><body >');
        mywindow.document.write(content);
        mywindow.document.write('</body></html>');    
        mywindow.document.close();
        mywindow.focus()
        mywindow.print();
        mywindow.close();
        return true;
      };

    render(){
        return(
            <div className="card-body">
                            <div className="row">
                                <div className="col-sm-8 my-auto">
                                     <div id="pbox">                                   
                                        <GraphCanvas graphCoordinates={this.props.graphData}/>
                                    </div>
                                    <button className="btn btn-info btn-xm" onClick={this.printGraph}>Print</button>
                                    <hr/>
                                </div>
                                <div className="col-sm-4 text-center my-auto">
                                    <div className="h4 mb-0 text-primary">
                                        <input id="xmin" type="number" value={this.state.xVals.xMinVal} onChange={(event)=>this.updateRange(event)} className="form-control form-control-sm"/>
                                    </div>
                                    <div className="h4 mb-0 text-primary">X Min</div>
                                    <hr/>
                                    <div className="h4 mb-0 text-warning">
                                        <input id="xmax" type="number" value={this.state.xVals.xMaxVal} onChange={(event)=>this.updateRange(event)} className="form-control form-control-sm"/>
                                    </div>
                                    <div className="h4 mb-0 text-warning">X Max</div>
                                    <hr/>
                                    <div className="h4 mb-0 text-success">
                                        <input id="xtick" type="number" value={this.state.xVals.xTickVal} onChange={(event)=>this.updateRange(event)} className="form-control form-control-sm"/>
                                    </div>
                                    <div className="h4 mb-0 text-success">X Tick</div>
                                    <hr/>
                                    <div className="h4 mb-0 text-warning">
                                        <button id="xru"  onClick={(event)=>this.updateRange(event)} className="btn btn-success btn-sm">
                                            Update
                                        </button>   

                                    </div>
                                </div>
                            </div>
                        </div>
        );
    }
}

export default GraphBody;