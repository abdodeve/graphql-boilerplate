

<h1 align="center"><strong>Boilerplate for an advanced GraphQL Server</strong></h1>

<br />

![alt text](https://imgur.com/lIi4YrZ.png)

![https://i.imgur.com/XkDNkYm.png](https://i.imgur.com/XkDNkYm.png)
<br />
<div align="center"><strong>🚀 Bootstrap your GraphQL server within seconds</strong></div>
<div align="center">Advanced starter kit for a flexible GraphQL server for Node.js - based on best practices from the GraphQL community.</div>

## Features

- **Scalable GraphQL server:** The server uses [`graphql-yoga`](https://github.com/prisma/graphql-yoga) which is based on Apollo Server & Express

- **MongoDB:** The most popular database for modern apps [`MongoDB`](https://www.mongodb.com)

- **Interactions:** Sample BREAD of 3 model (posts, comments, users)

 - **Relations:** All possible relations are used, subdocument & reference

- **Tooling**: Out-of-the-box support for [GraphQL Playground](https://github.com/prisma/graphql-playground)
- **Extensible**: Simple and flexible thanks to mongoose models – easy to adjust and extend

- **Configuration**: Preconfigured

- **Architecture**: Component Based Architecture

- **Mongoose**: The elegant mongodb object modeling for node.js

For a fully-fledged **GraphQL & Node.js tutorial**, visit [How to GraphQL](https://www.howtographql.com/graphql-js/0-introduction/).

  
## Getting started

```sh
# 1 Rename .env.example as .env 
# 2 Change MONGODB_URI by your DB uri
# 3 Navigate to the folder
cd graphql-boilerplate
# 4.Run 
npm install
# 5.Start server using node src/index.js (runs on http://localhost:4000) and open in GraphQL Playground
```

### Request exampls
#### Query
```sh
# Get all posts with related comments and user
query {
   posts {
      id
      published
      title
      content
      comments {
      	content
      }
      user{
        name
        email
      }
    }
}
```

![https://i.imgur.com/EHamtnI.png](https://i.imgur.com/EHamtnI.png)


#### Mutation
```sh
# Create new post request
mutation{
	createPost(
              user_id: "5e14dc6c5c2cb87b05f9197a"
              title: "Love Node.js"
              content: "Node.js is most powerfull language"
            ){
							       id
              title
              content
            }
}
```

![https://i.imgur.com/yJJLlO1.png](https://i.imgur.com/yJJLlO1.png)

## Documentation

### Commands

* `npm run start` starts GraphQL server on `http://localhost:4000`

### Project structure

![](https://i.imgur.com/uD2fqZo.png)

| File name 　　　　　　　　　　　　　　| Description 　　　　　　　　<br><br>| 
| :--  | :--         |
| `└── src ` (_directory_) | _Contains the source files for your GraphQL server_ |
| `　　├── index.js` | The entry point for your GraphQL server |


## Contributing

1. Clone it (<https://github.com/abdodeve/graphql-boilerplate.git>)
2. Create your feature branch (`git checkout -b feature/featureName`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/featureName`)
5. Create a new Pull Request.
