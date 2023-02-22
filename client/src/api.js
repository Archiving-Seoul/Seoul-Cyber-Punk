import axios from "axios";
const PORT_URL = "http://35.76.79.228:3030";
async function get(apiUrl) {
  const result = await axios.get(
    `${
      PORT_URL
      // process.env.REACT_APP_BASE_URL || "https://seoul-cyber-punk.herokuapp.com"
    }${apiUrl}`,
    {
      withCredentials: true,
    }
  );

  if (!result) {
    throw new Error("ERROR");
  }

  return result;
}

async function post(apiUrl, data) {
  const result = await axios.post(`${PORT_URL}${apiUrl}`, data, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
  return result;
}

async function patch(apiUrl, data) {
  const result = await axios.patch(`${PORT_URL}${apiUrl}`, data, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
  return result;
}

async function del(apiUrl) {
  const result = await axios.delete(`${PORT_URL}${apiUrl}`, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
  return result;
}

export {get, post, patch, del as delete};
