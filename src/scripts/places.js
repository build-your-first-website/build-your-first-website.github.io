let places = [];
const storageKey = "my-website:places";

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

  places.forEach((place, index) => {
    const item = document.createElement("li");
    item.textContent = place;

    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "Remove";
    button.setAttribute("aria-label", "Remove " + place);
    button.addEventListener("click", () => removePlace(index));

    item.append(" ", button);
    list.append(item);
  });
}

function savePlaces() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(places));
  } catch (error) {
    document.getElementById("list-message").textContent =
      "Your list can't be saved in this browser, but it will work until you leave the page.";
  }
}

function loadPlaces() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if (Array.isArray(saved)) {
      places = saved.filter((place) => typeof place === "string");
    }
  } catch (error) {
    places = [];
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
  savePlaces();

  document.getElementById("list-message").textContent =
    "Added " + placeName + ". " + describeCount();
  input.value = "";
  input.focus();
}

function removePlace(index) {
  const removed = places[index];
  places.splice(index, 1);
  showPlaces();
  savePlaces();

  document.getElementById("list-message").textContent =
    "Removed " + removed + ". " + describeCount();
  document.getElementById("place-name").focus();
}

function forgetPlaces() {
  try {
    localStorage.removeItem(storageKey);
  } catch (error) {
    // If storage is blocked, there's nothing saved to remove.
  }

  places = [];
  showPlaces();
  document.getElementById("list-message").textContent = "Your list has been cleared.";
}

document.getElementById("place-form").addEventListener("submit", addPlace);
document.getElementById("forget-places").addEventListener("click", forgetPlaces);
loadPlaces();
showPlaces();
