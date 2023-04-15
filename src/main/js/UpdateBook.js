import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Form, FormGroup, Button, Input, Label, Container } from "reactstrap";

export default function UpdateBook() {
  const params = useParams();
  const [id, setID] = useState(params.id);
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  let history = useHistory();

  useEffect(() => {
    fetch(id)
      .then((res) => res.json())
      .then(
        (result) => {
          setTitle(result.title);
          setCategory(result.category);
          //setIsLoaded(true);
          console.log(result);
        },
        (error) => {
          //setIsLoaded(true);
          //setError(error);
        }
      );
  }, []);
  const updateData = (e) => {
    e.preventDefault();
    console.log("Update clicked");
    console.log("props" + params);
    fetch(`${id}`, {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        category: category,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        history.push("/read");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Container className="mt-5">
      <h2>Update Book</h2>
      <Form onSubmit={updateData} method="post">
        <FormGroup className="mt-3">
          <Label for="add-book-title-input">Title</Label>
          <Input
            id="add-book-title-input"
            type="text"
            placeholder="Title"
            className="mt-2"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup className="mt-3">
          <Label for="add-book-category-input">Title</Label>
          <Input
            id="add-book-category-input"
            type="text"
            placeholder="category"
            className="mt-2"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          ></Input>
        </FormGroup>
        <Button className="mt-3" type="submit">
          Update Book
        </Button>
      </Form>
    </Container>
  );
}
