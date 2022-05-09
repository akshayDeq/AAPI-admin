import decodeJwt from "jwt-decode";
const apiUrl = process.env.REACT_APP_API_URL;

const authProvider = {
  login: ({ username, password }) => {
    let email = username;
    const request = new Request(apiUrl + "/auth/admin/signin", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });
    return fetch(request)
      .then((response) => {
        return response.json();
      })
      .then(function (data) {
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        return data;
      })
      .then(({ token }) => {
        const decodedToken = decodeJwt(token);
        localStorage.setItem("token", token);
        localStorage.setItem("role", decodedToken.role);
      });
  },
  checkError: (error) => {
    /* ... */
  },
  checkAuth: () => {
    return localStorage.getItem("token") ? Promise.resolve() : Promise.reject();
  },
  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    return Promise.resolve();
  },
  getIdentity: () => {
    return localStorage.getItem("role");
  },
  getPermissions: () => {
    const role = localStorage.getItem("role");
    return role ? Promise.resolve(role) : Promise.reject();
  },
};

export default authProvider;
