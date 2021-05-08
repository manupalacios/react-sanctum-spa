import React from "react";
import apiClient from "../services/api";

const Books = () => {
    const [books, setBooks] = React.useState([]);
    const [title, setTitle] = React.useState('');
    const [author, setAuthor] = React.useState('');
    React.useEffect(() => {
        apiClient
            .get("/api/books")
            .then((response) => {
                setBooks(response.data);
            })
            .catch((error) => console.error(error));
    }, []);

    const handleSubmit = () => {
        apiClient
            .post("/api/books", {
                title,
                author
            })
            .then((response => {
                console.log(response);
            }))
            .catch((error) => console.error(error));
    }

    const bookList = books.map((book) => <li key={book.id}>{book.title}</li>);

    return (
        <React.Fragment>
            <label>
                Title
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </label>
            <label>
                Author
                <input
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
            </label>
            <button onClick={handleSubmit}>Crear</button>
            <ul>{bookList}</ul>
        </React.Fragment>
    );
};

export default Books;
