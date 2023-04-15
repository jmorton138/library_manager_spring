import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, FormGroup, Button, Input, Label, Container } from "reactstrap";

export default function AddBook() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  let history = useHistory();

  const postData = (e) => {
    e.preventDefault();
    fetch("book", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
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
      <h2>Add Book to Library</h2>
      <Form onSubmit={postData} method="post">
        <FormGroup className="mt-3">
          <Label for="edit-book-title-input">Title</Label>
          <Input
            id="edit-book-title-input"
            type="text"
            placeholder="Title"
            className="mt-2"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup className="mt-3">
          <Label for="edit-book-category-input">Category</Label>
          <Input
            id="edit-book-category-input"
            type="text"
            placeholder="category"
            className="mt-2"
            name="category"
            onChange={(e) => setCategory(e.target.value)}
          ></Input>
        </FormGroup>
        <Button className="mt-3" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
