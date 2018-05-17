import React,{Component} from "react";
import GraphHeader from "./cmp/GraphHeader";
import GraphBody from "./cmp/GraphBody";
import GraphFooter from "./cmp/GraphFooter";
import math from "mathjs/dist/math";

class GraphWidget extends Component {
    
    dxRangeMin=-500;
    dxRangeMax=500;
    dxRangeTick=50;

    render(){
        return(
            <div className="card mb-3">
                <GraphHeader formula={this.props.formula}/>
                <GraphBody graphData={this.createGraphData(this.props.formula)} graphCfg={this.props.config}
                 xAxisUpdate={this.props.modifyXRange}/>
                <GraphFooter/>
            </div>
        );
    }

    generateGraphXRange = (start, end,xTick) => {
        return Array.from({length: ((end - start)/xTick)+1}, (v, k) =>{ return {x:k*xTick + start}})
    };

    createGraphData=(formulaVal)=>{

        let plottedValues=[];
        let xrObj=this.props.config.xRange;
        let xRanges=this.generateGraphXRange(xrObj.xMin,xrObj.xMax,xrObj.xTick);
        if(formulaVal===""){
            formulaVal="0";
        }
        let fNode=math.parse(formulaVal);
        let fCode=fNode.compile();
        plottedValues=xRanges.map((val,index)=>{
                return {x:val.x,y:fCode.eval({x:val.x}) }
            });
        return plottedValues;       
    };
}
export default GraphWidget;