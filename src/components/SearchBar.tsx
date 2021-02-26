import React, { useState, useEffect, FormEvent } from "react";
import { Form, Button } from "react-bootstrap";

interface Props {
  search: (query: string) => void;
}

export default function SearchBar(props: Props) {
  const [query, setQuery] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.search(query);
    setQuery("");
  };

  return (
    <Form onSubmit={handleSubmit} className="w-100">
      <Form.Group className="d-flex">
        <Form.Control
          type="text"
          placeholder="City"
          value={query}
          onChange={(e) => setQuery(e.currentTarget.value)}
        />
        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
}
