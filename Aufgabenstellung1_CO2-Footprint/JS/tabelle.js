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
  let table, rows, switching, i, x, y, shouldSwitch, dir,
    switchcount = 0;
//Tabelle finden
  table = document.getElementById("tabelleEmission");
  switching = true;
//Erste Sortierrichtung setzen
  dir = "asc";
//While schleife die läuft bis nichts mehr sortiert wird  
  while (switching) {
    switching = false; //es wurde nichts sortiert
    rows = table.rows;
//-1 da die erste Zeile die Überschriften beinhaltet und nicht relevant ist!
    for (i = 1; i < rows.length - 1; i++) { 
      shouldSwitch = false;
//Auswahl der zuvergleichenden Objekte X=aktuelle Reihe, Y aus der nächsten Reihe
      x = rows[i].getElementsByTagName("td")[n];
      y = rows[i + 1].getElementsByTagName("td")[n];
//Vergleich der 2 Zeilen und bestimmen ob sortiert werden muss aufsteigend x > Y, absteigend x < y 
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
//Auswertung und ggfs. sortieren     
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount++;
//wenn nichtsortiertwird und es ist aufsteigend wechseln auf absteigendesortierung       
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
function suchen() {
//Definieren der benötigten Variablen   
  let input, filter, table, tr, tdNull, tdEins, i, txtValueNull, txtValueEins;
  input = document.getElementById("tbInputFilter"); //Finden des Eingabefeldes auf der Seite 
  filter = input.value.toLowerCase(); //Alle Eingaben als kleinbuchstaben damit Groß- und Kleinschreibung beim filtern egal ist
  table = document.getElementById("tabelleEmission"); //bestimmen welche Tabelle gefiltert werden soll
  tr = table.getElementsByTagName("tr"); //Eeihen sind alle Elemente der Tabelle mit dem namen "tr"
  // Mit einer for Schleife wird der Filter auf jede Zeile angewandt, so oft bis i gleich der anzahl der Reihen ist
  for (let i = 0; i < tr.length; i++) {
    tdNull = tr[i].getElementsByTagName("td")[0]; // Row 0 = Spalte Land Inhalt der Zeile mit index i
    tdEins = tr[i].getElementsByTagName("td")[1]; // Row 1 = Spalte Unternehmen Inhalt der Zeile mit index i

    if ((tdNull, tdEins)) {
      txtValueNull = tdNull.textContent || tdNull.innerText; //bestimmen des Textinhaltes des Tabellenfeldes Land  
      txtValueEins = tdEins.textContent || tdEins.innerText; //bestimmen des Textinhaltes des Tabellenfeldes Unternehmen

      if (
        txtValueNull.toLowerCase().indexOf(filter) > -1 || //vergleichen des Textinhaltes des Tabellenfeldes Land mit der Eingabe
        txtValueEins.toLowerCase().indexOf(filter) > -1 //vergleichen des Textinhaltes des Tabellenfeldes Unternehmen mit der Eingabe
      ) {
        tr[i].style.display = ""; //Bei Übereinstimmung wird die Zeile angezeigt
      } else {
        tr[i].style.display = "None"; //Keine Übereinstümmung, die Zeile wird ausgeblendet
      }
    }
  }
}
