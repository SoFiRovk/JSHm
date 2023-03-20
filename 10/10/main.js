const userData = JSON.parse(users);
// const imgEl = document.querySelector(".user_img");
// imgEl.src = userData.results[0].picture.medium;

// const user_FirstNameEl = document.querySelector(".user_FirstName");
// user_FirstNameEl.textContent = userData.results[0].name.first;

// const user_LastNameEl = document.querySelector(".user_LastNameEl");
// user_LastNameEl.textContent = userData.results[0].name.first;

// const userCountryEl = document.querySelector(".userCountry");
// userCountryEl.textContent = userData.results[0].name.first;

// const userEmailEl = document.querySelector(".userEmail");
// userEmailEl.textContent = userData.results[0].email;

// const userPhoneEl = document.querySelector(".userPhone");
// userPhoneEl.textContent = userData.results[0].location;

// const contentEl = document.querySelector(".content");
// userData.results.array.forEach((el) => {
//   console.log(el);
//   const userWrapEl = document.querySelector(".div");
//   userWrapEl.classList.add("user-Wrap");
//   contentEl.append(userWrapEl);

//   const imgEl = document.childElement(".img");
//   imgEl.classList.add("user_img");
//   imgEl.src = el.picture.medium;
//   imgEl.alt = "photo";
//   userWrapEl.append(imgEl);

//   const userFirstName = document.childElement(".h2");
//   userFirstName.classList.add("user_FirstName");
//   userFirstName.textContent = el.picture.name.first;
//   userWrapEl.append(userFirstName);

//   const userLastNameEl = document.childElement(".h2");
//   userLastNameEl.classList.add("user_LastName");
//   userLastNameEl.textContent = el.picture.name.last;
//   userWrapEl.append(userLastNameEl);
// });
let content = "";
userData.results.forEach((user) => {
  content += `
  <div class="user-Wrap">
  <img class="user_img" src="${user.picture.medium}" alt="photo" />
  <h2 class="user_FirstName">${user.name.first}</h2>
  <h2 class="user_LastName">${user.name.last}</h2>
  <p class="userCountry">${user.location.country}</p>
  <p class="userEmail">${user.email}</p>
  <p class="userPhone">${user.phone}</p>
  <button>add to friends</button>
</div>`;
});
const contentEl = document.querySelector(".content");
contentEl.innerHTML = content;
