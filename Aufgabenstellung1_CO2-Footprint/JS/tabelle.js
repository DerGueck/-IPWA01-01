// function resetTable() {
//   //alte Tabelle löschen
//   let table = document.getElementById("myTableBody");
//   let row = "";
//   table.innerHTML = row;
// }
function buildtable(data) {

  //alte Tabelle löschen
    let table = document.getElementById("myTableBody");
  for (let i = 0; i < data.length; i++) {
    let row = "";
    table.innerHTML = row;
  }
  //neue Tabelle Schreiben
  for (let i = 0; i < data.length; i++) {
    let row = `<tr>
                          <td>${data[i].land}</td>
                          <td>${data[i].unternehmen}</td>
                          <td>${data[i].emission}</td> 
                         </tr>`;
    table.innerHTML += row;
  }
}
function sortieren(n) {
  let table,
    rows,
    switching,
    i,
    x,
    y,
    shouldSwitch,
    dir,
    switchcount = 0;
  table = document.getElementById("tabelleEmission");
  switching = true;

  dir = "asc";

  while (switching) {
    switching = false;
    rows = table.rows;

    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;

      x = rows[i].getElementsByTagName("td")[n];
      console.log(x);
      y = rows[i + 1].getElementsByTagName("td")[n];

      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;

      switchcount++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}



function suchen() {
  let input, filter, table, tr, tdNull, tdEins, i, txtValueNull, txtValueEins;
  input = document.getElementById("tbInputFilter");
  filter = input.value.toLowerCase();
  table = document.getElementById("tabelleEmission");
  tr = table.getElementsByTagName("tr");
console.log(input)
  

  for (let i = 0; i < tr.length; i++) {
    tdNull = tr[i].getElementsByTagName("td")[0];
    tdEins = tr[i].getElementsByTagName("td")[1];
    if ((tdNull, tdEins)) {
      txtValueNull = tdNull.textContent || tdNull.innerText;
      txtValueEins = tdEins.textContent || tdEins.innerText;

      if (
        txtValueNull.toLowerCase().indexOf(filter) > -1 ||
        txtValueEins.toLowerCase().indexOf(filter) > -1
      ) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "None";
      }
    }
  }
}
