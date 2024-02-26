import {apiServices} from "./apiServices";
import {urls} from "../constants";

const episodeServices = {
    getAll:(page)=>apiServices.get(urls.episodes, {params:{page}})
};

export {
    episodeServices
}