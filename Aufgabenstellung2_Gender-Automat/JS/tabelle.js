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
                          <td>${data[i].Text}</td>                          
                         </tr>`;
    table.innerHTML += row;
  }
}

function gendern(inputText, genderRegeln){

outputText = inputText.Text.toString();
genderRegeln.forEach(tauschen => {
  outputText = outputText.replace(tauschen.generischMaskuli, tauschen.generInclusiv)
  arrayOut[0].Text = outputText;
  return arrayOut
  });
  buildtable(arrayOut)
  
 }