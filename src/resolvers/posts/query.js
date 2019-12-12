const hello = (_, args) => {
  return `Hello ${args.name || "World"}!`;
};

const posts = (_, args) => {
  return [
    {
      id: 1,
      published: true,
      title: "Title 1",
      content: "Content 1"
    },
    {
      id: 2,
      published: true,
      title: "Title 2",
      content: "Content 2"
    }
  ];
};

const post = (_, args) => {
  return {
    id: 1,
    published: true,
    title: "Title 1",
    content: "Content 1"
  };
};

module.exports = {
  hello,
  posts,
  post
};
