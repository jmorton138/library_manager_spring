import React, { useState } from 'react';

export default function AddBook() {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');


    const postData = (e) => {
        e.preventDefault()
        fetch("book", {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
              "title": title,
              "category": category
            },
         )
         })
         .then((response) => response.json())
            .then((data) => {
              return data;
            })
            .catch((error) => {
              console.error(error);
            });
         setTitle('');
         setCategory('');
        }
    return (
        <form onSubmit={postData} method="post">
            <input type="text" placeholder="Title"name="title" onChange={(e) => setTitle(e.target.value)}></input>
            <input type="text" placeholder="category" name="category" onChange={(e) => setCategory(e.target.value)}></input>
            <button type="submit" >Submit</button>
        </form>
    )

}

