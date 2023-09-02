import { useContext } from "react";

import FavouritesContext from "../store/favourites-context";
import MeetupList from "../components/meetups/MeetupList";

function Favourites() {
  const favouritesCtx = useContext(FavouritesContext);

  //dispay empty message or favourites list
  let content;

  if (favouritesCtx.totalFavourites === 0) {
    content = <p>No Favoutes yet</p>;
  } else {
    content = <MeetupList meetups={favouritesCtx.favourites} />;
  }

  return (
    <section>
      <h1>My Favourates</h1>
      {content}
    </section>
  );
}

export default Favourites;
