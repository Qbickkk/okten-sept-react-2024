import {apiServices} from "./apiServices";
import {urls} from "../constants";

const episodeServices = {
    getAll:(page)=>apiServices.get(urls.episodes.base, {params:{page}})
};

export {
    episodeServices
}