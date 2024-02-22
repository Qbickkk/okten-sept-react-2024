const baseURL = 'https://jsonplaceholder.typicode.com';

const users = '/users';
const posts = '/posts';
const comments = 'comments';

const urls = {
  users:{
      base: users,
      byId:(id)=>`${users}/${id}`
  },
  posts:{
      base:posts,
      byId:(userId)=>`${posts}/${userId}`
  },
  comments:{
      byPostId:(postId)=>`${posts}/${postId}/${comments}`
  }
};

export {
    baseURL,
    urls
}