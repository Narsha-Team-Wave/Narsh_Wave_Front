import { customAxios } from "../util/CustomAxios";

export const getUserStateData = async (number, name, gender) => {
  const response = await customAxios.get(
    `/data/user/${number}?name=${name}&gender=${gender}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  console.log(response);

  return response.data;
};
