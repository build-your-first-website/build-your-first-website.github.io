let count = 0;

function describeCount() {
  if (count === 1) {
    return "You have 1 place on your list.";
  } else {
    return "You have " + count + " places on your list.";
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

  const item = document.createElement("li");
  item.textContent = placeName;
  document.getElementById("places").append(item);
  count = count + 1;
  document.getElementById("list-message").textContent =
    "Added " + placeName + ". " + describeCount();

  input.value = "";
  input.focus();
}

document.getElementById("place-form").addEventListener("submit", addPlace);
