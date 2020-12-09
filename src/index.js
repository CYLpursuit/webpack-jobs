import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Dialog from './components/dialog' // 配置了resolve，才可以这样用
import Test from './components/test'
import { add } from '@utils/utils'
import './index.less';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p className="hello">hello {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <img className="img" src={require('./a.jpeg')}/>
      <Dialog/>
      <div>数学家陈景润证明了1 + 2 = {add(1, 2)}</div>
      <Test/>
    </div>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'));