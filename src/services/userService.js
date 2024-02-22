import {apiService} from "./apiService";
import {urls} from "../constants";

const userService = {
  getAll:()=>apiService.get(urls.users.base),
  getById:(id)=>apiService.get(urls.users.byId(id))
};

export{
    userService
}