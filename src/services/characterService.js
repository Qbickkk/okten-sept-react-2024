import {apiServices} from "./apiServices";
import {urls} from "../constants";

const characterService = {
  getByIds:(ids)=>apiServices.get(urls.characters.byIds(ids))
};

export {
    characterService
}