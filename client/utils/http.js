export const get = async (endpoint) => {
  try {
    const fetchResponse = await fetch(`http://localhost:3000/api/${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin',
    });

    if (fetchResponse.ok) {
      return await fetchResponse.json();
    }
  } catch (e) {
    console.log(e);
  }
};

export const post = async (endpoint, data) => {
  try {
    const fetchResponse = await fetch(`http://localhost:3000/api/${endpoint}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin',
    });

    if (fetchResponse.ok) {
      return await fetchResponse.json();
    }
  } catch (e) {
    console.log(e);
  }
};

export const put = async (endpoint, data) => {
  try {
    const fetchResponse = await fetch(`http://localhost:3000/api//${endpoint}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin',
    });

    if (fetchResponse.ok) {
      return await fetchResponse.json();
    }
  } catch (e) {
    console.log(e);
  }
};

export const del = async (endpoint) => {
  try {
    const fetchResponse = await fetch(`http://localhost:3000/api//${endpoint}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin',
    });

    if (fetchResponse.ok) {
      return await fetchResponse.json();
    }
  } catch (e) {
    console.log(e);
  }

  return [];
};
