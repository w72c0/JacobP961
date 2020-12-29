// knapp för att få fram listan
let checkQueue = document.querySelector("#list");
let list = document.querySelector("#passangerList");
// input fält för att skriva in namn
let input = document.querySelector("#name");
// knapp för att flytta namn längs ner i listan
let moveLast = document.querySelector("#MoveToLast");
// knapp för att Fltta personen till toppen av listan
let moveFirst = document.querySelector("#MoveToTop");
// Checka in button
let CheckInBtn = document.querySelector("#del");
// Antal namn i listan
let amoutofpassanger = 0;
// Array med kö
const peopleInLine = ["Jacob", "Oscar", "Sara", "Adam", "Nils", "Hanna"];

// function remove button
let removeButton = ()=>{
    
}


// Klicka på knappen och listan med kö kommer ut
checkQueue.addEventListener("click", () => {
  peopleInLine.forEach((person) => {
    let newlist = document.querySelector("#passangerList");
    let newlistPassanger = document.createElement("li");
    newlistPassanger.textContent = person;
    newlist.appendChild(newlistPassanger);
    amoutofpassanger++;
    document.getElementById("list").disabled = true;
    
  });

  // klicka på knapp och input.value namn blir sist på listan
  moveLast.addEventListener("click", () => {
    // Lägg till namn först i listan
    list.innerHTML = "";
    peopleInLine.push(input.value);
    amoutofpassanger++;
    newlist();
  });

  // klicka på knapp och input.value namn blir överst på listan
  moveFirst.addEventListener("click", () => {
    // lägg till namn överst i listan

    list.innerHTML = "";
    peopleInLine.unshift(input.value);
    amoutofpassanger++;
    newlist();
  });

  // klicka på knappen och namn försvinner från listan
  CheckInBtn.addEventListener("click", () => {
    list.removeChild(list.childNodes[0]);
    amoutofpassanger--;
    if (amoutofpassanger === 0) {
      let EmptyList = document.createElement("h1");
      EmptyList.textContent = "There are currently no people standing in line";
      document.querySelector("#Meddelande").appendChild(EmptyList);
    }
  });
});

let newlist = () => {
  peopleInLine.forEach((person) => {
    let newlist = document.querySelector("#passangerList");
    let newlistPassanger = document.createElement("li");
    newlistPassanger.textContent = person;
    newlist.appendChild(newlistPassanger);
    console.log(amoutofpassanger);
  });
};