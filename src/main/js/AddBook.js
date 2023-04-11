import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export default function AddBook() {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    let history = useHistory();

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
                history.push('/read');
            })
            .catch((error) => {
              console.log(error);
            });
        }
    return (
        <form onSubmit={postData} method="post">
            <input type="text" placeholder="Title"name="title" onChange={(e) => setTitle(e.target.value)}></input>
            <input type="text" placeholder="category" name="category" onChange={(e) => setCategory(e.target.value)}></input>
            <button type="submit" >Submit</button>
        </form>
    )

}

