const helloMutation = (_, args) => {
  console.log(args);
  return `Hello ${args.name || "World"}!`;
};

const createPost = (_, args) => {
  return {
    id: Math.floor(Math.random() * 10000),
    published: false,
    title: args.title,
    content: args.content
  };
};

const deletePost = (_, args) => {
  console.log(args);
  return {
    id: args.id,
    published: true,
    title: "Title 1",
    content: "Content 1"
  };
};

module.exports = {
  helloMutation,
  createPost,
  deletePost
};
