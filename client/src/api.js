import axios from "axios";

async function get(apiUrl) {
  const result = await axios.get(`${process.env.REACT_APP_BASE_URL}${apiUrl}`, {
    withCredentials: true,
  });

  if (!result) {
    throw new Error("ERROR");
  }

  return result;
}

async function post(apiUrl, data) {
  const result = await axios.post(
    `${process.env.REACT_APP_BASE_URL}${apiUrl}`,
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    }
  );
  return result;
}

async function patch(apiUrl, data) {
  const result = await axios.patch(
    `${process.env.REACT_APP_BASE_URL}${apiUrl}`,
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    }
  );
  return result;
}

async function del(apiUrl) {
  const result = await axios.delete(
    `${process.env.REACT_APP_BASE_URL}${apiUrl}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    }
  );
  return result;
}

export { get, post, patch, del as delete };
