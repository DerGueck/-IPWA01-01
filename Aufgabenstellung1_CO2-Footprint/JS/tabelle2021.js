let myArray2021 = [
  { land: "Deutschland", unternehmen: "B.Braun", emission: "790234" },
  { land: "Deutschland", unternehmen: "Siemens", emission: "2346735" },
  { land: "USA", unternehmen: "General Motors", emission: "79324550234" },
  { land: "England", unternehmen: "Nestle", emission: "337555590234" },
  { land: "Holland", unternehmen: "Danone", emission: "2444590234" },
  { land: "Deutschland", unternehmen: "B.Braun", emission: "790234" },
  { land: "Deutschland", unternehmen: "Siemens", emission: "2346735" },
  { land: "USA", unternehmen: "General Motors", emission: "79324550234" },
  { land: "England", unternehmen: "Nestle", emission: "337555590234" },
  { land: "Holland", unternehmen: "Danone", emission: "2444590234" },
  { land: "Deutschland", unternehmen: "B.Braun", emission: "790234" },
  { land: "Deutschland", unternehmen: "Siemens", emission: "2346735" },
  { land: "USA", unternehmen: "General Motors", emission: "79324550234" },
  { land: "England", unternehmen: "Nestle", emission: "337555590234" },
  { land: "Holland", unternehmen: "Danone", emission: "2444590234" },
  { land: "Schuffelhausen", unternehmen: "Tini", emission: "2345674355365" },
];

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
