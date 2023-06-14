import React from 'react'
import * as ReactDOM from 'react-dom/client'
import Main from './main'


//완성된 리액트 main 파일과 HTML을 연결하는 파일 

const id:HTMLElement|null=document.getElementById('root');
if(id!==null){
  const root=ReactDOM.createRoot(id);
  root.render(<Main />);

}

// const root=ReactDOM.createRoot(id as Element|DocumentFragment);
// root.render(<Main />);





