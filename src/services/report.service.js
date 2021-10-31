/* eslint-disable import/no-anonymous-default-export */
import { REPORT_LIST } from "../constants/urls";
import { handleresponse } from "../helpers/handle-response";
import { gets } from "../helpers/api";

const report_list = (id) => {
  return gets(`${REPORT_LIST}?user_id=${id}`).then((response) => {
    return handleresponse(response);
  });
};

export default {
  report_list,
};
