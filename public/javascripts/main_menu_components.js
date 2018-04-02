var background = {marginHeight:'10px'};
var imageWidth = {width:'25%'};
var imageParms = {width:'100%', height:'250px'};

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
            <div>
            <div className="row">
            <div className="col-sm-4">
            <div className="thumbnail">
                <img src={videogames_image} style={imageParms}/>
                <div className="caption">
                    <h2>Video Games
                        <button type="button" className="btn btn-primary"><span className="badge">7</span> Listings</button>
                    </h2>
                </div>
            </div>
            </div>
            <div className="col-sm-4">
            <div className="thumbnail">
                <img src={books_image} style={imageParms}/>
                <div className="caption">
                    <h2>Books
                        <button type="button" className="btn btn-success"><span className="badge">7</span> Listings</button>
                    </h2>
                </div>
            </div>
            </div>

                <div className="col-sm-4">
                    <div className="thumbnail">
                        <img src={appliance_image} style={imageParms}/>
                        <div className="caption">
                            <h2>Appliances
                                <button type="button" className="btn btn-info"><span className="badge">7</span> Listings</button>
                            </h2>
                        </div>
                    </div>
                </div>

            </div>
            </div>
        );
    }
})

ReactDOM.render(<Image/>,document.getElementById("test"));