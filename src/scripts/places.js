let places = [];

function describeCount() {
  if (places.length === 1) {
    return "You have 1 place on your list.";
  } else {
    return "You have " + places.length + " places on your list.";
  }
}

function showPlaces() {
  const list = document.getElementById("places");
  list.replaceChildren();

  for (const place of places) {
    const item = document.createElement("li");
    item.textContent = place;
    list.append(item);
  }
}

function addPlace(event) {
  event.preventDefault();

  const input = document.getElementById("place-name");
  const placeName = input.value.trim();

  if (placeName === "") {
    document.getElementById("list-message").textContent = "Type a place name first.";
    input.focus();
    return;
  }

  places.push(placeName);
  showPlaces();

  document.getElementById("list-message").textContent =
    "Added " + placeName + ". " + describeCount();
  input.value = "";
  input.focus();
}

document.getElementById("place-form").addEventListener("submit", addPlace);
showPlaces();
