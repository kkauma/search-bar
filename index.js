const searchInput = document.querySelector("#searchInput");

searchInput.addEventListener("keyup", (e) => {
  let searchQuery = e.target.value.toLowerCase();
  let allNamesDOMCollection = document.getElementsByClassName("name");

  for (let counter = 0; counter < allNamesDOMCollection.length; counter++) {
    const currentName =
      allNamesDOMCollection[counter].textContent.toLowerCase();

    if (currentName.includes(searchQuery)) {
      allNamesDOMCollection[counter].style.display = "block";
    } else {
      allNamesDOMCollection[counter].style.display = "none";
    }
  }
});
