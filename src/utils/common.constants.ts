/**
 * @description:
 */
export const API_URL = process.env.VUE_APP_API_URL

/**
 * @description:
 */
export enum StorageNameCode {
  TOKEN = 'TOKEN',
}

/**
 * @description:
 */
export enum RequestEnum {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

/**
 * @description:  contentType
 */
export enum ContentTypeEnum {
  // json
  JSON = 'application/json;charset=UTF-8',
  // form-data qs
  FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
  // form-data  upload
  FORM_DATA = 'multipart/form-data;charset=UTF-8',
}

export enum HttpResponseCode {
  // 공통 성공
  CODE_SUCCESS = 0,
  // 공통 실패
  CODE_UNEXPECTED = 1001,
  CODE_BAD_REQEUST = 2001,
  CODE_TIME_OUT = 2002,
}
