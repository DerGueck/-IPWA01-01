let text1 = [
  {
    Text: "1. Anleitung für den Aufbau eines Regals: Der Handwerker legt alle Materialien bereit und prüft, ob alle Teile vollständig sind. Anschließend misst er die gewünschte Höhe des Regals an der Wand aus. Der Handwerker bohrt die Löcher für die Wandhalterung an den markierten Stellen. Dann befestigt er die Wandhalterungen mit den Holzschrauben fest an der Wand. Zum Schluss setzt er das Regalbrett in die Halterungen ein und überprüft, ob alles gerade ist.",
  },
];

let text2 = [
  {
    Text: "2. Anleitung für das Kochen einer Gemüsepfanne: Der Koch wäscht das Gemüse gründlich und schneidet es in mundgerechte Stücke. Anschließend erhitzt er das Olivenöl in einer großen Pfanne bei mittlerer Hitze. Der Koch gibt zuerst die Zwiebeln in die Pfanne und brät sie glasig an. Danach fügt er die Möhren hinzu und lässt sie 5 Minuten mitbraten. Zuletzt gibt er die Paprika und die Zucchini hinzu, würzt alles mit Salz, Pfeffer und Kräutern und brät es für weitere 10 Minuten.",
  },
];

let text3 = [
  {
    Text: "3. Anleitung für die Installation eines Computerprogramms: Der Nutzer lädt die Installationsdatei von der offiziellen Website des Programms herunter. Nach dem Download öffnet er die Datei per Doppelklick, um den Installationsassistenten zu starten. Der Nutzer folgt den Anweisungen des Assistenten, wählt den Installationsort aus und akzeptiert die Lizenzvereinbarung. Nachdem die Installation abgeschlossen ist, startet er den Computer neu, falls dies erforderlich ist. Zum Schluss öffnet er das Programm, um sicherzustellen, dass es ordnungsgemäß funktioniert.",
  },
];

let arrayOut = [
  {
    Text: "",
  },
];

let genderRegeln = [
  {generischMaskuli: /\Der Handwerker\b/g, generInclusiv: "Der Handwerker oder die Handwerkerin"},
  { generischMaskuli: /\bArzt\b/g, generInclusiv: "Ärztin oder Arzt" },
  {
    generischMaskuli: /\bIngenieur\b/g,
    generInclusiv: "Ingenieurin oder Ingenieur",
  },
  { generischMaskuli: /\bStudent\b/g, generInclusiv: "Studentin oder Student" },
  { generischMaskuli: /\bLehrer\b/g, generInclusiv: "Lehrkraft" },
  { generischMaskuli: /\bSchüler\b/g, generInclusiv: "Schülerin oder Schüler" },
  { generischMaskuli: /\bBürger\b/g, generInclusiv: "Bürgerin oder Bürger" },
  { generischMaskuli: /\ber\b/g, generInclusiv: "sie oder er" },
  { generischMaskuli: /\bDer Koch\b/g, generInclusiv: "Der Koch oder die Köchin" },
  { generischMaskuli: /\bDer Nutzer\b/g, generInclusiv: "Der Nutzer oder die Nutzerin" },
];

let keinCode = [
  {codeJa: /\b<script>\b/g, codeNein: "<NoScript>"},
  { generischMaskuli: /\bArzt\b/g, generInclusiv: "Ärztin oder Arzt" },
  ];
