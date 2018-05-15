var beigeBackground = {backgroundColor:'#ffefd2'};
var width100 = {width:'100%'};

var HackPanels = React.createClass({
    render:function() {
        return (
            <div>
                <h1>Kala Tend</h1>
            </div>
        );
    }
})

var BorrowPanel = React.createClass({
    getInitialState:function(){
        return{
            comments_temp:[]
        }
    },
    render:function(){
        return(
            <div className="container ">
                <div className="panel panel-default  animated bounceInRight" style={beigeBackground}>
                    <div className="panel-body">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
})

var BorrowLayout = React.createClass({
    getInitialState:function(){
        hacks_list = JSON.parse(hacks_list);
        return{
            comments:hacks_list
        }
    },
    createPanel:function(text, i){
        return(
            <BorrowPanel key={i} index={i}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8">
                            <h3>{text.title}</h3>
                        </div>
                        <div className="col-sm-2">
                            <p><span className="glyphicon glyphicon-user"></span> : {text.username}</p>
                            <p><span className="glyphicon glyphicon-calendar"></span> :{text.available}</p>
                            <p><span className="glyphicon glyphicon-tag"></span> :{text.category}</p>
                        </div>
                    </div>
                </div>
            </BorrowPanel>
        );
    },
    render:function() {
        return(
            <div>

                {this.state.comments.map(this.createPanel)}
            </div>
        );
    }
})

ReactDOM.render(<BorrowLayout/>,document.getElementById("BorrowLayout"));