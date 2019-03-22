import axios from "axios";

export function fetchPeopleRecords() {
  return dispatch => {
    axios
      .get("api/headHunters/fetchHeadHunters")
      .then(response => {
        dispatch({
          type: "fetchRecordsSuccess",
          payload: response.data
        });
      })
      .catch(e => {
        console.log("e", e);
      });
  };
}
export function createHeadHunter(data) {
  return dispatch => {
    axios
      .post("api/headHunters/createHeadHunter", data)
      .then(() => {
        dispatch({
          type: "createRecordSuccess",
        });        
      })
      .catch(e => {
        console.log("e", e);
      });
  };
}
