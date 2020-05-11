const paginate = (items, startIndex, endIndex) => {
  const indexOfLastPost = startIndex * endIndex;
  const indexOfFirstPost = indexOfLastPost - endIndex;
  return items.slice(indexOfFirstPost, indexOfLastPost);
};

export default paginate;
