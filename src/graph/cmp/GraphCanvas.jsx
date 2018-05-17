import React,{Component} from "react";
import { ResponsiveContainer,LineChart, Line,XAxis, YAxis, CartesianGrid, Tooltip, Legend ,Brush} from 'recharts';

class GraphCanvas extends Component {

    render(){
        return(
            <ResponsiveContainer width="100%" height={300}>
            <LineChart  data={this.props.graphCoordinates} margin={{top: 5, right: 5, left: 5, bottom: 5}}>
            <XAxis type="number" domain={[-20, 20]} dataKey="x"/>
            <YAxis dataKey="y"/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Legend />
            <Line type="monotone" dataKey="y" stroke="#8884d8" fill="#82ca9d" activeDot={{r: 8}}/>
            <Brush/>
            </LineChart>
            </ResponsiveContainer>
        );
    }
}
export default GraphCanvas;