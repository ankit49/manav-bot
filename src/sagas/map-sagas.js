import { put } from "redux-saga/effects";
import mapAction from "../actions/map-actions";

let coordinatesData = [
  [-4.1628252, 50.3695931],
  [-4.1627732, 50.3696286],
  [-4.1627088, 50.3696529],
  [-4.1626333, 50.3696605],
];

let markerCoordinates = [
  [-4.1628252, 50.3695931],
  [-2.3626333, 50.3696605],
];
let centerCoordinates = [-4.1628252, 50.3695931];

export default function* mapSaga() {
  yield put(
    mapAction.updateCoordinates(
      coordinatesData,
      markerCoordinates,
      centerCoordinates
    )
  );
}
