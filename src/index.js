import React from 'react';
import ReactDOM from 'react-dom';
import './root.css';
import Main from './Main';
import { grommet, Grommet } from "grommet";
import  GlobalStyles from './cssReset';
import { ToastContainer, Flip} from 'react-toastify';

ReactDOM.render(
  <React.StrictMode>
     <Grommet theme={grommet}>
      <GlobalStyles/>
    <Main />
    <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        style={{fontSize : '0.85em'}}
        transition={Flip}
        
      />
    </Grommet>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

