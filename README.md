# Wiki API

Wiki API is a RESTful API that allows users to create, read, update, and delete articles from a MongoDB database. The project demonstrates the use of Node.js, Express.js, and MongoDB to build a simple API.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Technologies Used](#technologies-used)
- [API Endpoints](#api-endpoints)
- [Contribution](#contribution)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Ashish-Chokhani/wiki-api.git
    cd wiki-api
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Ensure MongoDB is running on your local machine.

4. Start the server:
    ```bash
    node app.js
    ```

5. The server will start on port 3000. You can access the API at `http://localhost:3000`.

## Usage

- **Create an Article:** Send a POST request to `/articles` with `title` and `content` in the request body.
- **Read All Articles:** Send a GET request to `/articles`.
- **Read a Specific Article:** Send a GET request to `/articles/:articleTitle`.
- **Update an Article:** Send a PUT or PATCH request to `/articles/:articleTitle` with the new `title` and/or `content`.
- **Delete an Article:** Send a DELETE request to `/articles/:articleTitle`.
- **Delete All Articles:** Send a DELETE request to `/articles`.

## File Structure

```bash
wiki-API
├── .DS_Store
├── .gitignore
├── app.js
├── package.json
└── package-lock.json
```

## Technologies Used
- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js**: Fast, unopinionated, minimalist web framework for Node.js.
- **EJS**: Embedded JavaScript templating.
- **MongoDB**: NoSQL database for storing article data.
- **Mongoose**: Elegant MongoDB object modeling for Node.js.
- **body-parser**: Node.js body parsing middleware.

## API Endpoints
- /articles
  - GET: Retrieve all articles.

    ``` bash
    curl http://localhost:3000/articles
    ```

  - POST: Create a new article.

    ```bash
    curl -X POST -H "Content-Type: application/x-www-form-urlencoded" -d "title=Article Title&content=Article Content" http://localhost:3000/articles
    ```

   - DELETE: Delete all articles.

        ```bash
        curl -X DELETE http://localhost:3000/articles
        ```

- /articles/
  
   - GET: Retrieve a specific article by title.

        ```bash
        curl http://localhost:3000/articles/Article%20Title
        ```

  - PUT: Update a specific article by title.

    ```bash
    curl -X PUT -H "Content-Type: application/x-www-form-urlencoded" -d "title=New Title&content=New Content" http://localhost:3000/articles/Article%20Title
    ```
    
  - PATCH: Update a specific field of an article by title.

    ```bash
    curl -X PATCH -H "Content-Type: application/x-www-form-urlencoded" -d "content=Updated Content" http://localhost:3000/articles/Article%20Title
    ```

  - DELETE: Delete a specific article by title.

    ```bash
    curl -X DELETE http://localhost:3000/articles/Article%20Title
    ```

## Contribution
We welcome contributions! Feel free to fork the repository, make changes, and submit a pull request.
