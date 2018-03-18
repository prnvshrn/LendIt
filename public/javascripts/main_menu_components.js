var background = {marginHeight:'10px'};



var HackPanels = React.createClass({
    render:function() {
        return (
            <div>
                <h1>Kala Tend</h1>
            </div>
        );
    }
})

var Image = React.createClass({
    render:function () {
        return(
            <div className="thumbnail">
                <img src={books_image}/>
                <div className="caption">
                    <h2>Books</h2>
                </div>
            </div>
        );
    }
})

ReactDOM.render(<Image/>,document.getElementById("test"));