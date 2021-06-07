const FETCH_COORDINATES = "fetchCoordinates";
const UPDATE_COORDINATES = "updateCoordinates";

export default {
  FETCH_COORDINATES,
  fetchCoordinates: () => ({ type: FETCH_COORDINATES }),
  UPDATE_COORDINATES,
  updateCoordinates: (
    coordinatesData,
    markerCoordinates,
    centerCoordinates
  ) => ({
    type: UPDATE_COORDINATES,
    coordinatesData: coordinatesData,
    markerCoordinates: markerCoordinates,
    centerCoordinates: centerCoordinates,
  }),
};
