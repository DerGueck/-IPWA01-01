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
