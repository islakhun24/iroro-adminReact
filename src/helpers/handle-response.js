export const handleresponse = (response) => {
  if (response.status === 200) {
    return {
      code: 200,
      data: response.data,
    };
  } else {
    return {
      code: response.status,
      data: null,
    };
  }
};
