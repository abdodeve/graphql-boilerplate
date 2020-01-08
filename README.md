
<h1 align="center"><strong>Boilerplate for a full GraphQL Server</strong></h1>

<br />
![](https://imgur.com/lIi4YrZ.png)
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
![alt text]([https://i.imgur.com/EHamtnI.png](https://i.imgur.com/EHamtnI.png)[https://i.imgur.com/EHamtnI.png](https://i.imgur.com/EHamtnI.png)) ![alt text](https://i.imgur.com/Ym06T2Y.png)

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

The GraphQL boilerplates are maintained by the GraphQL community, with official support from the [Apollo](https://dev-blog.apollodata.com) & [Graphcool](https://blog.graph.cool/) teams.

Your feedback is **very helpful**, please share your opinion and thoughts! If you have any questions or want to contribute yourself, join the [`#graphql-boilerplate`](https://graphcool.slack.com/messages/graphql-boilerplate) channel on our [Slack](https://graphcool.slack.com/).
