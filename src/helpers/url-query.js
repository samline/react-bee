/**
 * getUrlQueryString
 * @param {object} - query object to parse as string - e.g. { a:1, b:2 }
 * @returns query string - e.g. a=1&b=2 ...
 */

export const getQueryString = (params) => {
  const query =
    params && Object.keys(params).length > 0
      ? `${new URLSearchParams({ ...params }).toString()}`
      : ''

  return query
}
