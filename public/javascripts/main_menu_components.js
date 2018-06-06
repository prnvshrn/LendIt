var background = {marginHeight:'10px'};
var imageWidth = {width:'70px',height:'70px'};
var imageParms = {width:'100%', height:'250px'};
var beigeBackground = {backgroundColor:'#ffefd2', textAlign:'center'};
var greyBackground = {backgroundColor:'#d3d3d3', textAlign:'center'};
var noBorder = {border:'None', textAlign:'center'}
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
var binocular_icon = '/images/binocular.png';
var lend_icon = '/images/lend-icon.png';
var borrow_icon = '/images/borrow-icon.png';

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


var MainLayout = React.createClass({
    handleSearch: function(i) {
        //window.location = '/borrow/'+i;
        alert(i);
    },
    render:function(){
        return(
            <div>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="panel panel-default animated bounceInLeft" style={greyBackground}>
                        <img src={videogame_icon} style={imageWidth}/>
                        <h2>Video Games</h2>
                            <a href="/borrow/Video Games" className="btn btn-primary btn-lg" style={BackgroundNone}>Listings</a>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="panel panel-default animated bounceInUp" style={beigeBackground}>
                            <img src={book_icon} style={imageWidth} />
                            <h2>Books</h2>
                            <a href="/borrow/Books" className="btn btn-primary btn-lg" style={BackgroundNone}>Listings</a>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="panel panel-default animated bounceInRight" style={greyBackground}>
                            <img src={phone_icon} style={imageWidth} />
                            <h2>Electronic Gadgets</h2>
                            <a href="/borrow/Electronic Gadgets" className="btn btn-primary btn-lg" style={BackgroundNone}>Listings</a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="panel panel-default animated bounceInLeft" style={beigeBackground}>
                            <img src={microwave_icon} style={imageWidth}/>
                            <h2>Home Applicances</h2>
                            <a href="/borrow/Home Appliances" className="btn btn-primary btn-lg" style={BackgroundNone}>Listings</a>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="panel panel-default animated bounceInDown" style={greyBackground}>
                            <img src={furniture_icon} style={imageWidth} />
                            <h2>Furnitures</h2>
                            <a href="/borrow/Furnitures" className="btn btn-primary btn-lg" style={BackgroundNone}>Listings</a>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="panel panel-default animated bounceInRight" style={beigeBackground}>
                            <img src={miscellaneous_icon} style={imageWidth} />
                            <h2>Miscellanous</h2>
                            <a href="/borrow/Miscellaneous" className="btn btn-primary btn-lg" style={BackgroundNone}>Listings</a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="panel panel-default" style={noBorder}>
                            <img src={binocular_icon} style={imageWidth} />
                            <h2>Look for items in listings</h2>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="panel panel-default" style={noBorder}>
                            <img src={lend_icon} style={imageWidth} />
                            <h2>Lend out items for others</h2>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="panel panel-default" style={noBorder}>
                            <img src={borrow_icon} style={imageWidth} />
                            <h2>Borrow stuff that you need</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
})

ReactDOM.render(<MainLayout/>,document.getElementById("test"));