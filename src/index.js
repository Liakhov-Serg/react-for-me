// import React from 'react';
import ReactDOM from 'react-dom';

const data =  {
  "id" : " id-1 " ,
  "url" : " https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg " ,
  "title" : " Пір'я. Анотація " ,
  "ціна" : 500 ,
  "автор" : {
    "tag" : " ractapopulous " ,
    "url" : " https://pixabay.com/users/ractapopulous-24766/ "
  },
  "кількість" : 10
};

const painting = (
  <div>
    <img src={data.url} alt={data.title} width="480" />
    <h2>{data.title}</h2>
    <p>
      Автор: <a href="{data.автор.url}">{data.автор.tag}</a>
    </p>
    <p>Ціна: {data.ціна} кредитів</p>

  </div>
);

ReactDOM.render(painting, document.querySelector(`#root`));



// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
