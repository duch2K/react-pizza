import React from 'react';
import { Route } from 'react-router-dom';

import './scss/app.scss';
import { Header } from './components';
import { Home, Cart } from './pages';

function App() {
    return (
        <div className="wrapper">
            <Header />
    
            <div className="content">
                <Route path="/" component={Home} exact />
                <Route path="/cart" component={Cart} exact />
            </div>  
        </div>
    );
}

export default App;



// class App extends React.Component {
//     componentDidMount() {    
//         axios.get('http://localhost:3000/db.json')
//             .then(({ data }) => {
//                 this.props.setPizzas(data.pizzas);
//             });
//     }

//     render() {
//         return (
//             <div className="wrapper">
//                 <Header />
    
//                 <div className="content">
//                     <Route path="/" render={() => <Home items={this.props.items} />} exact />
//                     <Route path="/cart" component={Cart} exact />
//                 </div>  
//             </div>
//         );
//     }
// }


// const mapStateToProps = (state) => {
//     return {
//         items: state.pizzas.items
//     };
// };

// const mapDispatchToProps = {
//     setPizzas
// };
// ---------------------------------
// const mapDispatchToProps = (dispatch) => {
//     return {
//         setPizzas: (items) => dispatch(setPizzasAction(items))
//     };
// };

