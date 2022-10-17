import React from "react";
import logo from "./logo.svg";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./App.css";

const recipes = [
  {
    author: "Jim",
    name: "Chicken Curry",
    description: "Delicious spicy chicken curry",
    image:
      "https://img.freepik.com/free-psd/book-cover-mockup_125540-572.jpg?w=1800&t=st=1666037905~exp=1666038505~hmac=de515134080bb1313839f8bee750845a8c7afce7e500dc2ecabc371e65f2cf01",
  },
  {
    author: "Aravind",
    name: "Hamburger",
    description: "Juicy burger with toppings and a soft bun",
    image:
      "https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/02/Anatomy_book_cover.png?auto=format&q=60&fit=max&w=930",
  },
];

function App() {
  const [book, setBook] = React.useState({
    author: "",
    name: "",
    description: "",
    image: "",
  });

  const selectedBook = (index) => {
    const newRecipes = [...recipes];
    setBook(newRecipes[index]);
  };

  return (
    <div className="App">
      <Container style={{ marginTop: "60px" }}>
        <Row>
          <Col xs={12} md={4}>
            {recipes.map((book, index) => (
              <div
                key={index}
                className="book-item"
                onClick={() => selectedBook(index)}
              >
                {book.name}
              </div>
            ))}
          </Col>
          <Col xs={12} md={8}>
            {book.name == "" ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "200px",
                }}
              >
                <font>Select A book please</font>
              </div>
            ) : (
              <Container>
                <Row>
                  <Col xs={12} md={12}>
                    <img src={book.image} className="book-img" />
                  </Col>
                  <Col xs={12} md={12}>
                    <div className="author-container">
                      <font>
                        <strong>Book Name:</strong> {book.name}
                      </font>
                      <font>
                        <strong>Book Author:</strong> {book.author}
                      </font>
                    </div>
                    <p style={{ padding: "10px" }}> {book.description}</p>
                  </Col>
                </Row>
              </Container>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
