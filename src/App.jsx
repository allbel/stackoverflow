import './App.css';
import Input from "./components/Input/Input";
import List from "./components/List/List";
import {useEffect, useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getSearchTC} from "./store/search-reducer";

function App() {
  const dispatch = useDispatch();

  const items = useSelector(state => state.search.items);

  useEffect(() => {
    dispatch(getSearchTC());
  }, []);

  const memoItems = useMemo(() => items, [items]);

  return (
    <div className="App">
      <Input/>
      <List items={memoItems}/>
    </div>
  );
}

export default App;
