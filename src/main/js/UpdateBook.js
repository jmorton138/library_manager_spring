import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

export default function UpdateBook() {
    const params = useParams()
    const [title, setTitle] = useState(params.title);
    const [category, setCategory] = useState('');
    let history = useHistory();

    const updateData = (e) => {
        e.preventDefault();
        console.log("Update clicked");
        console.log('props' + params.title);
        fetch(`${title}`, {
          method: 'put',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
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
    <div className="container">
        <h2>Update Book</h2>
        <form onSubmit={updateData} method="post">
            <input type="text" placeholder="Title" name="title" value={title} onChange={(e) => setTitle(e.target.value)}></input>
            <input type="text" placeholder="category" name="category" onChange={(e) => setCategory(e.target.value)}></input>
            <button type="submit" >Update Book</button>
        </form>
    </div>
    )

}