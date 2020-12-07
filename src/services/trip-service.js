import TokenService from './token-service';
import config from '../config';

const TripApiService = {
  postRating(rating) {
    return fetch(`${config.API_ENDPOINT}/rating`, {
      method: 'POST',
      headers: {
        Authorization: `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify(rating),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  checkUserHasRated(trip_id) {
    return fetch(`${config.API_ENDPOINT}/rating/check/${trip_id}`, {
      headers: {
        Authorization: `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json',
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  getTrips() {
    return fetch(`${config.API_ENDPOINT}/trips`, {
      headers: {
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  getTrip(trip_id) {
    return fetch(`${config.API_ENDPOINT}/trips/${trip_id}`, {
      headers: {
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  getStops(trip_id) {
    return fetch(`${config.API_ENDPOINT}/stops/${trip_id}`, {
      headers: {
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  getAllStops(user_id) {
    return fetch(`${config.API_ENDPOINT}/stops/allStops/${user_id}`, {
      headers: {
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  postTrip(trip) {
    return fetch(`${config.API_ENDPOINT}/trips`, {
      method: 'POST',
      headers: {
        Authorization: `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify(trip),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  postStop(stop) {
    return fetch(`${config.API_ENDPOINT}/stops`, {
      method: 'POST',
      headers: {
        Authorization: `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify(stop),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  deleteTrip(trip_id) {
    return fetch(`${config.API_ENDPOINT}/trips/${trip_id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) => {
      if (!res.ok) {
        res.json().then((e) => Promise.reject(e));
      } else {
        return;
      }
    });
  },

  deleteStop(stop_id) {
    return fetch(`${config.API_ENDPOINT}/stops/${stop_id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) => {
      if (!res.ok) {
        res.json().then((e) => Promise.reject(e));
      } else {
        return;
      }
    });
  },

  patchStop(stop, stop_id) {
    return fetch(`${config.API_ENDPOINT}/stops/${stop_id}`, {
      method: 'PATCH',
      headers: {
        Authorization: `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify(stop),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  patchTrip(trip, trip_id) {
    return fetch(`${config.API_ENDPOINT}/trips/${trip_id}`, {
      method: 'PATCH',
      headers: {
        Authorization: `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify(trip),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default TripApiService;
