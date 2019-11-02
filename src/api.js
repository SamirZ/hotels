import axios from 'axios';

// TODO: read as environment variable
const endpoint = 'http://localhost:8000';

// Call login api
export const login = async ({ username, password }) => {
  return await axios.post(`${endpoint}/api-token-auth/`, {
    username,
    password
  }).then(response => {
    localStorage.setItem('Token', response.data.token);
    return response.data
  }).catch(error => {
    throw error.response.data
  });
};

// Call signup api
export const signUp = async ({ username, password, email, first_name, last_name }) => {
  return await axios.post(`${endpoint}/register/`, {
    username, password, email, first_name, last_name
  }).then(response => {
    return response
  }).catch(error => {
    throw error.response.data
  });
};

// Retrieve a list of hotels
export const getHotelsCall = async () => {
  try {
    const response = await axios.get(`${endpoint}/hotel_api/`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

export const getHotelReviewsCall = async ({ id }) => {
  try {
    const response = await axios.get(`${endpoint}/hotel_api/get_hotel_reviews/${id}`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

// // Retrieve single hotel
export const getHotelCall = async ({ id }) => {
  try {
    const response = await axios.get(`${endpoint}/hotel_api/${id}`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

export const getFavoritesCall = async () => {
  try {
    const response = await axios.get(`${endpoint}/favorites`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

export const postFavoriteCall = async ({ id: hotel_id, isFavorite: is_favorite }) => {
  try {
    const response = await axios.post(`${endpoint}/favorites/add_remove`, {
      hotel_id,
      is_favorite
    });
    return response.data;
  } catch (e) {
    console.log(e);
  }
}
