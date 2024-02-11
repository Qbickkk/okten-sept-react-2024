const baseURL = 'http://owu.linkpc.net/carsAPI/v1';
const cars = '/cars';

// const baseURL = 'https://jsonplaceholder.typicode.com';
// const users = '/users';
// const comments = '/comments';

const urls = {
    // users:{
    //     base: users
    // },
    // comments:{
    //     base: comments
    // }
    cars:{
        base: cars,
        byId:(id)=>`${cars}/${id}`
    }
};

export {
    baseURL,
    urls
}

