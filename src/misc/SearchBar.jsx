import React,{Component} from "react";


class SearchBar extends Component {

    state={
        userInput:""
    };

    handleSubmit=(event)=>{
        event.preventDefault();
        this.props.searchFunction({userInput:this.state.userInput});
        this.setState({userInput:""});    // reset text box
    };

    componentWillReceiveProps(prop){

        this.setState({userInput:prop.historySearchKey});

    }

    render(){
        return(
            <ol className="breadcrumb">
              <li className="breadcrumb-item active">
                <form onSubmit={this.handleSubmit} className="form-inline my-2 my-lg-0 mr-lg-2">
                <div className="input-group">
                    <input className="form-control" type="text" 
                    value={this.state.userInput} onChange={(event)=>this.setState({userInput:event.target.value})} placeholder="Enter formula..."/>
                    <span className="input-group-append">
                    <button className="btn btn-primary" type="submit">
                        <i className="fa fa-play"></i>
                    </button>
                    </span>
                </div>
                </form>
              </li>
            </ol>
        );
    }
}
export default SearchBar;