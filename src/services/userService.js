import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const userService = {
    getAll: ()=>apiService.get(urls.users.base),
    create: (user)=>apiService.post(urls.users.base, user)
};

export {
    userService
}

