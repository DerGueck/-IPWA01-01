function resetable() {
  //alte Tabelle löschen
  let table = document.getElementById("myTableBody");
      let row = "";
    table.innerHTML = row;  
}

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
  let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("tabelleEmission");
  switching = true;
      // Set the sorting direction to ascending:
  dir = "asc";
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("td")[n];
      console.log(x);
      y = rows[i + 1].getElementsByTagName("td")[n];
      /* Check if the two rows should switch place,
      based on the direction, asc or desc: */
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Each time a switch is done, increase this count by 1:
      switchcount ++;
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
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

  //for loop
  for (let i = 0; i < tr.length; i++) {
    tdNull = tr[i].getElementsByTagName("td")[0];
    tdEins = tr[i].getElementsByTagName("td")[1];
    if ((tdNull, tdEins)) {
      txtValueNull = tdNull.textContent || tdNull.innerText;
      txtValueEins = tdEins.textContent || tdEins.innerText;

      if (txtValueNull.toLowerCase().indexOf(filter) > -1 || txtValueEins.toLowerCase().indexOf(filter) > -1 ) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "None";
      }
    }
  }
}
