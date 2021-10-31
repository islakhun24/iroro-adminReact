/* eslint-disable import/no-anonymous-default-export */
import {
  CATEGORY_CREATE,
  CATEGORY_DELETE,
  CATEGORY_LIST,
} from "../constants/urls";
import { handleresponse } from "../helpers/handle-response";
import { posts, gets, deletes } from "../helpers/api";

const category_create = (category_name, code) => {
  return posts(`${CATEGORY_CREATE}`, {
    category_name: category_name,
    code: code,
  }).then((response) => {
    return handleresponse(response);
  });
};

const category_delete = (id) => {
  return deletes(`${CATEGORY_DELETE}/${id}`).then((response) => {
    return handleresponse(response);
  });
};
const category_list = () => {
  return gets(`${CATEGORY_LIST}`).then((response) => {
    return handleresponse(response);
  });
};

export default {
  category_create,
  category_delete,
  category_list,
};
