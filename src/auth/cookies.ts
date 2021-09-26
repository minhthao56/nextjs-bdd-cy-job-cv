import cookie from "js-cookie";

// set the cookie
export const setCookie = (key: string, value: string) => {
  if (process.browser) {
    cookie.set(key, value, {
      expires: 60,
      path: "/",
    });
  }
};

// remove the cookie
export const removeCookie = (key: string) => {
  if (process.browser) {
    cookie.remove(key, {
      expires: 1,
    });
  }
};

// Get the cookie from client side
export const getCookieFromBrowser = (key: string) => {
  return cookie.get(key);
};
