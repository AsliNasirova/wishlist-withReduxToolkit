import './App.css';
import Wishlist from './Features/Wishlist/Wishlist';

import { Provider } from "react-redux";
import store from "./store";


const App=()=>{

  return (
   <Provider store={store}>
    <div>
      <Wishlist/>
    </div>
   </Provider>
  );
};

export default App
