/* eslint-disable import/no-anonymous-default-export */
import { BANNER_CREATE, BANNER_DELETE } from "../constants/urls";
import { handleresponse } from "../helpers/handle-response";
import { posts, deletes } from "../helpers/api";

const banner_create = (condition_name, code) => {
  return posts(`${BANNER_CREATE}`, {
    condition_name: condition_name,
    code: code,
  }).then((response) => {
    return handleresponse(response);
  });
};

const banner_delete = (id) => {
  return deletes(`${BANNER_DELETE}/${id}`).then((response) => {
    return handleresponse(response);
  });
};

export default {
  banner_create,
  banner_delete,
};
