/* eslint-disable import/no-anonymous-default-export */
import {
  SUBMISSION_ID_ACTION,
  SUBMISSION_ID_ARCHIVE,
  SUBMISSION_ID_DETAIL,
  SUBMISSION_ID_IMAGE_BACK,
  SUBMISSION_ID_IMAGE_FRONT,
  SUBMISSION_ID_LIST,
} from "../constants/urls";
import { handleresponse } from "../helpers/handle-response";
import { gets, puts } from "../helpers/api";

const submission_id_list = (filter) => {
  return gets(`${SUBMISSION_ID_LIST}?filter=${filter}`).then((response) => {
    return handleresponse(response);
  });
};
const submission_id_detail = (id) => {
  return gets(`${SUBMISSION_ID_DETAIL}?id=${id}`).then((response) => {
    return handleresponse(response);
  });
};
const submission_id_image_front = (id) => {
  return gets(`${SUBMISSION_ID_IMAGE_FRONT}?id=${id}`).then((response) => {
    return handleresponse(response);
  });
};
const submission_id_image_back = (id) => {
  return gets(`${SUBMISSION_ID_IMAGE_BACK}?id=${id}`).then((response) => {
    return handleresponse(response);
  });
};
const submission_id_auction = (id, type) => {
  return puts(`${SUBMISSION_ID_ACTION}?id=${id}&type=${type}`).then(
    (response) => {
      return handleresponse(response);
    }
  );
};
const submission_id_archive = (id) => {
  return puts(`${SUBMISSION_ID_ARCHIVE}?id=${id}`).then((response) => {
    return handleresponse(response);
  });
};
export default {
  submission_id_archive,
  submission_id_auction,
  submission_id_list,
  submission_id_detail,
  submission_id_image_front,
  submission_id_image_back,
};
