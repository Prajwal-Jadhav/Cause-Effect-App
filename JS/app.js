import data from "./data.js";

const names = document.querySelectorAll(".summary__name");
const content = document.querySelector(".content");

function getIndexOfClicked(name) {
  for (let i = 0; i < data.length; i++) {
    if (name === data[i].name) {
      return i;
    }
  }
}

function displayData(clicked) {
  let name = clicked.innerHTML;
  let index = getIndexOfClicked(name);

  let obj = data[index];

  content.innerHTML = `<div class='content__info'>
                          <p class='content__name' style='{font-size: 30px}'>
                            <strong>Name: </strong>${obj.name}
                          </p>
                          <p class='content__address'>
                            <strong>Address: </strong>${obj.street}, ${obj.city}, ${obj.state}, ${obj.country}.
                          </p>
                          <p class='content__phone'>
                            <strong>Phone: </strong>${obj.phone}
                          </p>
                          <p class='content__birthday'>
                            <strong>Birthday: </strong>${obj.birthday}
                          </p>
                        </div>`;
}

names.forEach((name) => {
  name.addEventListener("click", () => {
    names.forEach((item) => item.classList.remove("active"));
    name.classList.add("active");
    displayData(name);
  });
});
