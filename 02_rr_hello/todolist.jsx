import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import './index.scss';

export default function ToDoList(props) {
  const {dataSource, onClick, selectedMember} = props;
  console.log(props)
  const items = dataSource.map((item)=>{
    const item__cls = classnames({
      "todolist__item": true,
      "todolist__item--selected": selectedMember === item.id
    });
    return <div key={item.id} className={item__cls} onClick={onClick.bind(this, item.id)}>{item.name}</div>
  });
  return (
    <div className="todolist">
      {items}
    </div>
  );
}
