const start = parseInt(prompt("Enter starting point: "))
const end = parseInt(prompt("Enter ending point: "))

let items = "<pre>&lt;ul&gt;\n";

for (let year = start; year <= end; year ++){
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
    items += "   &lt;li&gt;" + year + "&lt;/li&gt;\n";
  }
}

items += "&lt;/ul&gt;</pre>";

document.querySelector("#target").innerHTML=items;