import { stringify } from "query-string";
import { fetchUtils } from "react-admin";
import swal from "sweetalert";

const apiUrl = process.env.REACT_APP_API_URL;

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  const token = localStorage.getItem("token");
  options.headers.set("Authorization", `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options).catch((error) => {
    return new Promise(function (resolve, reject) {
      reject({
        data: error.message,
      });
    });
  });
};

const dataProvider = {
  getList: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;

    let query = {};
    if (resource !== "transaction") {
      query = {
        ...fetchUtils.flattenObject(params.filter),
        order: order,
        field: field,
        page: page,
        perPage,
      };
    } else {
      query = {
        ...fetchUtils.flattenObject(params.filter),
        order: order,
        field: field === "id" ? "transactionId" : field,
        page: page,
        perPage,
      };
    }

    const url = `${apiUrl}/${resource}/?${stringify(query)}`;

    return httpClient(url).then(({ headers, json }) => {
      if (!headers.has("x-total-count")) {
        throw new Error(
          "The X-Total-Count header is missing in the HTTP Response. The jsonServer Data Provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare X-Total-Count in the Access-Control-Expose-Headers header?"
        );
      }

      if (resource === "transaction") {
        return {
          data: json.data.map((resource) => ({
            ...resource,
            id: resource.transactionId,
          })),

          total: parseInt(headers.get("x-total-count"), 10),
        };
      }

      return {
        data: json.data.map((resource) => ({
          ...resource,
          id: resource.id,
        })),

        total: parseInt(headers.get("x-total-count"), 10),
      };
    });
  },

  getOne: (resource, params) => {
    if (resource === "transaction") {
      return httpClient(`${apiUrl}/${resource}/${params.id}`).then(
        ({ json }) => {
          return {
            data: {
              ...json.data,
              ...json.data.member,
              id: json.data.transactionId,
            },
          };
        }
      );
    }

    return httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => {
      return { data: json.data };
    });
  },

  getMany: (resource, params) => {
    const query = {
      id: params.ids,
    };
    const url = `${apiUrl}/${resource}/?${stringify(query)}`;
    return httpClient(url).then(({ json }) => ({
      data: json.data.map((resource) => ({
        ...resource,
        id: resource.id,
      })),
    }));
  },

  getManyReference: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      ...fetchUtils.flattenObject(params.filter),
      [params.target]: params.id,
      _sort: field,
      _order: order,
      _start: (page - 1) * perPage,
      _end: page * perPage,
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;

    return httpClient(url).then(({ headers, json }) => {
      if (!headers.has("x-total-count")) {
        throw new Error(
          "The X-Total-Count header is missing in the HTTP Response. The jsonServer Data Provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare X-Total-Count in the Access-Control-Expose-Headers header?"
        );
      }

      return {
        data: json[json.dataKey].map((resource) => ({
          ...resource,
          id: resource.id,
        })),

        total: parseInt(headers.get("x-total-count").split("/").pop(), 10),
      };
    });
  },

  update: (resource, params) => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    let dataObj = {};
    if (resource === "member") {
      dataObj = { name: params.data.category.name };
      console.log(params.data.category.name);
    } else {
      dataObj = {
        name: params.data.modale.name,
        category: params.data.modale.category._id,
      };
    }
    return httpClient(`${url}`, {
      method: "PUT",
      body: JSON.stringify(dataObj),
    })
      .then(({ json }) => ({ data: json }))

      .catch((err) => {
        swal({
          title: err.data,
          type: "warning",
          showCancelButton: false,
          showConfirmButton: false,
          timer: 2000,
        });
        setTimeout(function () {
          window.location.reload();
        }, 2000);
      });
  },

  updateApprove: (resource, params) =>
    httpClient(`${apiUrl}/${resource}`, {
      method: "PATCH",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: params.data })),

  // json-server doesn't handle filters on UPDATE route, so we fallback to calling UPDATE n times instead
  updateMany: (resource, params) =>
    Promise.all(
      params.ids.map((id) =>
        httpClient(`${apiUrl}/${resource}/${id}`, {
          method: "PUT",
          body: JSON.stringify(params.data),
        })
      )
    ).then((responses) => ({ data: responses.map(({ json }) => json.id) })),

  create: (resource, params) => {
    return httpClient(`${apiUrl}/${resource}`, {
      method: "POST",
      body: JSON.stringify(params.data),
    })
      .then(({ json }) => ({ data: { ...params.data, id: json.id } }))
      .catch((err) => {
        swal({
          title: err.data,
          type: "warning",
          showCancelButton: false,
          closeOnConfirm: false,
          showConfirmButton: false,
          timer: 2000,
          confirmButtonClass: "btn-danger",
        });
        setTimeout(function () {
          window.location.reload();
        }, 2000);
      });
  },

  delete: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "DELETE",
    }).then(({ json }) => ({ data: params.id })),
  // json-server doesn't handle filters on DELETE route, so we fallback to calling DELETE n times instead
  deleteMany: (resource, params) =>
    Promise.all(
      params.ids.map((id) =>
        httpClient(`${apiUrl}/${resource}/${id}`, {
          method: "DELETE",
        })
      )
    ).then((responses) => ({ data: responses.map(({ json }) => json.id) })),
};

export default dataProvider;
