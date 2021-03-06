import mapAction from "../actions/map-actions";

const initialState = {
  coordinatesData: [],
  markerCoordinates: [],
  centerCoordinates: [],
  poshMarker: [],
};

export const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case mapAction.FETCH_COORDINATES:
      return state;
    case mapAction.UPDATE_COORDINATES:
      return {
        ...state,
        coordinatesData: action.coordinatesData,
        markerCoordinates: action.markerCoordinates,
        centerCoordinates: action.centerCoordinates,
        poshMarker: action.poshMarker,
      };
    default:
      return state;
  }
};
