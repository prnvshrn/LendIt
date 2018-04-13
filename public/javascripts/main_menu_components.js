var background = {marginHeight:'10px'};
var imageWidth = {width:'70px',height:'70px'};
var imageParms = {width:'100%', height:'250px'};
var beigeBackground = {backgroundColor:'#ffefd2', textAlign:'center'};
var greyBackground = {backgroundColor:'#d3d3d3', textAlign:'center'};
var colmd9 = "col-md-9";
var clicked = false;
var leftSize = "col-md-12";
var rightSize = "hidden col-md-0";
var videogame_icon = '/images/video-game.png';
var book_icon = '/images/book-icon.png';
var microwave_icon = '/images/microwave.png';
var phone_icon = '/images/phone-icon.png';
var furniture_icon = '/images/furniture.png';
var miscellaneous_icon = '/images/box-icon.png';
var BackgroundNone = {background:'None', color:'black'};

if(clicked)
{
    leftSize = "col-md-9";
    rightSize = "col-md-3";
}

var HackPanels = React.createClass({
    render:function() {
        return (
            <div>
                <h1>Kala Tend</h1>
            </div>
        );
    }
})


var Test = React.createClass({
    render:function(){
        return(
            <div>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="panel panel-default animated bounceInLeft" style={greyBackground}>
                        <img src={videogame_icon} style={imageWidth}/>
                        <h2>Video Games</h2>
                        <button className="btn btn-primary btn-lg" style={BackgroundNone}>Listings</button>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="panel panel-default animated bounceInUp" style={beigeBackground}>
                            <img src={book_icon} style={imageWidth} />
                            <h2>Books</h2>
                            <button className="btn btn-primary btn-lg" style={BackgroundNone}>Listings</button>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="panel panel-default animated bounceInRight" style={greyBackground}>
                            <img src={phone_icon} style={imageWidth} />
                            <h2>Electronic Gadgets</h2>
                            <button className="btn btn-primary btn-lg" style={BackgroundNone}>Listings</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="panel panel-default animated bounceInLeft" style={beigeBackground}>
                            <img src={microwave_icon} style={imageWidth}/>
                            <h2>Home Applicances</h2>
                            <button className="btn btn-primary btn-lg" style={BackgroundNone}>Listings</button>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="panel panel-default animated bounceInDown" style={greyBackground}>
                            <img src={furniture_icon} style={imageWidth} />
                            <h2>Furnitures</h2>
                            <button className="btn btn-primary btn-lg" style={BackgroundNone}>Listings</button>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="panel panel-default animated bounceInRight" style={beigeBackground}>
                            <img src={miscellaneous_icon} style={imageWidth} />
                            <h2>Miscellanous</h2>
                            <button className="btn btn-primary btn-lg" style={BackgroundNone}>Listings</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
})

var CentralScreenLayout = React.createClass({
    render : function() {
        return(
        <div>
            <Test/>
        </div>
        );
    }
})

ReactDOM.render(<Test/>,document.getElementById("test"));