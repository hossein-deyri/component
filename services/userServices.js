import { authModalType, authSteps } from '@/constants/CONSTANT';

const { endpoint } = require('endpoint');
const { http, default: API, httpNoToken } = require('./httpService');

export const getRefreshToken = async () => {
  const { data } = await http.get(endpoint.USER.refresh);
  sessionStorage.setItem('API_TOKEN', data);
  API.defaults.headers.common['Authorization'] = `Bearer ${data}`;
};

export const loginUser = async (userInfo) => {
  const { data, status } = await httpNoToken.post(
    endpoint.USER.signIn,
    userInfo
  );
  return { data, status };
};

export const sendPhoneNumber = async (formType, number, age, requestId) => {
  const formData = {
    step: authSteps.NUMBER,
    phoneNumber: number,
    ...(requestId && { requestId }),
    ...(age && { age })
  };
  
  let url;
  switch (formType) {
    case authModalType.FORGOT_PASSWORD:
      url = endpoint.USER.FORGOT_PASSWORD;
      break;
    case authModalType.SIGN_UP:
      url = endpoint.USER.SIGN_UP;
    default:
      break;
  }

  const { data, status } = await httpNoToken.post(url, formData);

  return { data, status };
};

export const sendOptCode = async (formType, otpCode, requestId) => {
  const formData = {
    step: authSteps.VALIDATE,
    otpCode,
    requestId
  };

  let url;
  switch (formType) {
    case authModalType.FORGOT_PASSWORD:
      url = endpoint.USER.FORGOT_PASSWORD;
      break;
    case authModalType.SIGN_UP:
      url = endpoint.USER.SIGN_UP;
    default:
      break;
  }

  const { data, status } = await httpNoToken.post(url, formData);
  return { data, status };
};

export const sendPassword = async (formType, password, requestId) => {
  const formData = {
    step: authSteps.GET_TOKEN,
    ...(formType === authModalType.FORGOT_PASSWORD
      ? { newPassword: password }
      : { password }),
    requestId
  };

  let url;
  switch (formType) {
    case authModalType.FORGOT_PASSWORD:
      url = endpoint.USER.FORGOT_PASSWORD;
      break;
    case authModalType.SIGN_UP:
      url = endpoint.USER.SIGN_UP;
    default:
      break;
  }

  const { data, status } = await httpNoToken.post(url, formData);

  return { data, status };
};

export const getUserInfo = async () => {
  const { data, status } = await http.get(endpoint.USER.GET_INFO);
  return { data, status };
};

export const avatarList = async () => {
  return await http.get(endpoint.USER.AVATAR);
};

export const profile = async () => {
  const { data, status } = await http.get(endpoint.USER.PROFILE);
  return data;
};

export const addProfile = async (userInfo) => {
  return await http.post(endpoint.USER.PROFILE, userInfo);
};

export const updateProfile = async (userInfo) => {
  return await http.put(endpoint.USER.PROFILE, userInfo);
};

export const deleteProfile = async (userId) => {
  return await http.delete(endpoint.USER.PROFILE +"/"+ userId);
};

export const activateProfile = async (userInfo) => {
  return await http.patch(
    endpoint.USER.ACTIVATE,
    userInfo
  );
};

export const deleteUserBookmarkInteraction = async (params) => {
  return await http.post(
    endpoint.PRODUCTS.DeleteUserBookmarkProductId,
    null,
    { params }
  );
};

export const changePassword = async (passwordInfo) => {
  const res = await http.post(endpoint.USER.CHANGE_PASSWORD, passwordInfo);
  return res;
};

export const updateUserInfo = async (type, info) => {
  const res = await http.put(endpoint.USER.UPDATE_INFO, { [type]: info });
  return res;
};

export const deActiveAccountUser = async (params) => {
  return await http.put(endpoint.USER.UPDATE_INFO, { status: 'DELETED' });
};
