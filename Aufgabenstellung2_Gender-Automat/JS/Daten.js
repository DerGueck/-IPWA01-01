let text1 = [
  {
    Text: "Ein Arzt und ein Ingenieur besprachen ihre Arbeit. Jeder Student sollte regelmäßig lernen, damit er die Prüfungen besteht. Der Lehrer erklärte dem Schüler die Aufgabe. Ein Bürger sollte sich um die Gesellschaft kümmern",
  },
  
];

let arrayOut = [
  {
    Text: "",
  },
  
];


let genderRegeln =[
  { generischMaskuli: /\bArzt\b/g, generInclusiv: 'Ärztin oder Arzt' },
  { generischMaskuli: /\bIngenieur\b/g, generInclusiv: 'Ingenieurin oder Ingenieur' },
  { generischMaskuli: /\bStudent\b/g, generInclusiv: 'Studentin oder Student' },
  { generischMaskuli: /\bLehrer\b/g, generInclusiv: 'Lehrkraft' },
  { generischMaskuli: /\bSchüler\b/g, generInclusiv: 'Schülerin oder Schüler' },
  { generischMaskuli: /\bBürger\b/g, generInclusiv: 'Bürgerin oder Bürger' },
  { generischMaskuli: /\ber\b/g, generInclusiv: 'sie oder er' },
];