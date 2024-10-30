const freelancers = [
  { name: "Mcloven", price: 30, occupation: "Writer" },
  { name: "Bobby", price: 50, occupation: "Teacher" },
  { name: "Carol", price: 70, occupation: "Programmer" },
  { name: "Denise", price: 100, occupation: "Plumber" },
  { name: "Kyle", price: 10, occupation: "Dog Walker" },
  { name: "Doug", price: 25, occupation: "Cashier" },
  { name: "Jessica", price: 68, occupation: "Accountant" },
];
let i = 0;
function addFreelancer() {
  const Artists = freelancers[Math.floor(Math.random() * freelancers.length)];
}

console.log(freelancers[i].name)
function render() {
  const nameList = document.querySelector("#artists");
  const nameElement = document.createElement("li");
  nameElement.innerHTML = `${freelancers[i].name},${freelancers[i].price},${freelancers[i].occupation}`;

  console.log(nameElement);

nameList.appendChild(nameElement);
}
const addArtistIntervalId = setInterval(() => {
  addFreelancer();
  render();

  i++;
}, 1000);

render();
