import { put } from "redux-saga/effects";
import mapAction from "../actions/map-actions";

let poshMarker = [
  [-4.12059929411764, 50.3751943529411],
  [-4.10855016666666, 50.3891932222222],
  [-4.14881124999999, 50.4161944583333],
  [-4.15543514285714, 50.4121284761904],
  [-4.11745605263157, 50.3940229999999],
  [-4.14211159090909, 50.3703597727272],
  [-4.13055004999999, 50.4269631999999],
  [-4.18201661904761, 50.396534047619],
];

let coordinatesData = [[-4.1650138, 50.3816006]];

let markerCoordinates = [[-4.1650138, 50.3816006]];
let centerCoordinates = [-4.1650138, 50.3816006];

export default function* mapSaga() {
  yield put(
    mapAction.updateCoordinates(
      coordinatesData,
      markerCoordinates,
      centerCoordinates,
      poshMarker
    )
  );
}
