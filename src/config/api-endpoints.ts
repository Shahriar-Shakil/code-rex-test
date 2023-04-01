export const USERS_API = "/users?limit=30";
export const USER_API = "/user";
export const getUsersPostApi = (id: number | string | undefined) =>
  `/users/${id}/posts`;
