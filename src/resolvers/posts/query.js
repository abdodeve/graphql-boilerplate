const hello = (_, args) => {
  return `Hello ${args.name || "World"}!`;
};

module.exports = {
  hello
};
