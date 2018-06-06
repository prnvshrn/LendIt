var greyBackground = {backgroundColor:'#ffefd2'}

var HackPanels = React.createClass({
    render:function() {
        return (
            <div>
                <h1>Kala Tend</h1>
            </div>
        );
    }
})

var LendForm = React.createClass({
    getInitialState:function(){
        return{
            file: '',imagePreviewUrl: ''
        }
    },
    _handleImageChange:function(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            console.log('There');
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }
        reader.readAsDataURL(file)
        },
    render:function(){
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} />);
        } else {
            $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }
        return(
            <div className="container animated bounce" style={greyBackground}>
                <form action="/lend" method="post">
                    <div className="form-group">
                        <label htmlFor="title">Title:</label>
                        <input type="text" className="form-control" id="title" name="title"/>
                    </div>

                    <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                        <label htmlFor="category">Category:</label>
                        <select className="form-control" id="category" name="category">
                            <option>Video Games</option>
                            <option>Books</option>
                            <option>Electronic Gadgets</option>
                            <option>Home Appliances</option>
                            <option>Furnitures</option>
                            <option>Miscellaneous</option>
                        </select>
                        </div>
                    </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label htmlFor="available">Available From:</label>
                                <input type="text" className="form-control" name="available" id="available" placeholder="MM/DD/YYY"/>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="comment">Description:</label>
                        <textarea className="form-control" rows="3" id="description" name="description"></textarea>
                    </div>

                    <button type="submit" className="btn btn-success btn-lg">Save</button>
                </form>
            </div>
        );
    }
})

ReactDOM.render(<LendForm/>,document.getElementById("LendForm"));