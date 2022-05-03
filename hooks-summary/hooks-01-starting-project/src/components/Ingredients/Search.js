import React, { useState, useEffect, useRef } from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {
  const [enteredFilter, setEnteredFilter] = useState('');
  const { onLoadIngredients } = props;
  const inputRef = useRef();

  useEffect(() => {

    const timer = setTimeout(() => {
      if (enteredFilter === inputRef.current.value) {
        const query =
          enteredFilter.length === 0
            ? ''
            : `?orderBy="title"&equalTo="${enteredFilter}"`;
        fetch('https://react-htttp-24e60-default-rtdb.firebaseio.com/ingredients.json' + query).then(
          response => response.json()
        ).then(responseData => {
          const loadedIngredients = [];
          for (const key in responseData) {
            loadedIngredients.push({
              id: key,
              title: responseData[key].title,
              amount: responseData[key].amount,
            });
          }
          onLoadIngredients(loadedIngredients);
        });
      }      //because of closure,the enteredfilter value is 500ms ago
    }, 500);
    return () => {
      clearTimeout(timer);
    };   //a clean up function,it will run right before this same use effect function will run next time
  }, [enteredFilter, onLoadIngredients, inputRef]);

  const filterHandler = (event) => {
    setEnteredFilter(event.target.value);

  };

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input ref={inputRef} type="text" value={enteredFilter} onChange={filterHandler} />
        </div>
      </Card>
    </section>
  );
});

export default Search;
