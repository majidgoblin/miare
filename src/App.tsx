import { Provider } from 'react-redux';
import { Transactions } from './Page/Transactions';
import store from './Redux/store';

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Transactions />
      </div>
    </Provider>
  );
}

export default App;
