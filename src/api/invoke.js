import moshApi from "./moshApi";

export const get = async ({ path }) => {
  return moshApi
    .get(path)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
