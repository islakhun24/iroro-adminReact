/* eslint-disable import/no-anonymous-default-export */
import {
  CONDITION_CREATE,
  CONDITION_LIST,
  CONDITION_DELETE,
} from "../constants/urls";
import { handleresponse } from "../helpers/handle-response";
import { posts, gets, deletes } from "../helpers/api";

const condition_create = (condition_name, code) => {
  return posts(`${CONDITION_CREATE}`, {
    condition_name: condition_name,
    code: code,
  }).then((response) => {
    return handleresponse(response);
  });
};

const condition_delete = (id) => {
  return deletes(`${CONDITION_DELETE}/${id}`).then((response) => {
    return handleresponse(response);
  });
};
const condition_list = () => {
  return gets(`${CONDITION_LIST}`).then((response) => {
    return handleresponse(response);
  });
};

export default {
  condition_create,
  condition_delete,
  condition_list,
};
