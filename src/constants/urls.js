const baseURL = 'https://jsonplaceholder.typicode.com';

const albums = '/albums';
const comments = '/comments';
const todos = '/todos';
const posts = '/posts';

const urls = {
  albums,
  todos,
  comments,
  posts: {
      byId: (id)=>`${posts}/${id}`
  }
};

export {
    baseURL,
    urls
}