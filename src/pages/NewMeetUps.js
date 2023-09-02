import { useNavigate } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetUps() {
  const history = useNavigate();

  //ADDING DATA TO OUR DATABASE. USING DUMMY DATABASE FOR THIS EXAMPLE
  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-meetup-app-27eaf-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-type": "application/json",
        },
      }
    ).then(() => {
      history("/");
    });
  }
  return (
    <div>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </div>
  );
}

export default NewMeetUps;
