// TODO
// var GroceryList = () => (
//   <ul>
//     <li>Apples</li>
//     <li>Bananas</li>
//   </ul>
// );

var Apples = () => (
  <li>Apples</li>
);

var Bananas = () => (
  <li>Bananas</li>
);

// var GroceryListItem = (props) => (
//   <li>{props.item}</li>
// );

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    // create a state object in the constructor
    this.state = {
      done: false
    };
  }

  // click handler
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {

    // create style object
    var style = {
      textDecoration: this.state.done === true ? 'line-through' : 'none'
    };

    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.item}</li>
    );
  }
}

// with explicit return statment - note the parenthesis!
var GroceryList = (props) => {
  return (
    <ul>
      {props.groceryList.map((item) => <GroceryListItem item={item}/>)}
    </ul>
  );
}

ReactDOM.render(<GroceryList groceryList={['apples', 'bananas', 'blueberries', 'kale']} />, document.getElementById('app'));
