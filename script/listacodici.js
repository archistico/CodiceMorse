// Codice MORSE
// linea = 3 punti
// spazio tra elementi stessa lettera = 1 punto
// spazio tra lettere = 3 punti
// spazio tra due parole = 7 punti

var margineX = 10;
var margineY = 10;

var punto = 20;
var linea = 3*punto;

var spazio = punto;
var spazioLettere = 3*punto;
var spazioParole = 7*punto;

var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute('style', 'border: 1px solid black');
svg.setAttribute('width', document.body.clientWidth);
svg.setAttribute('height', '500');
svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
document.body.appendChild(svg);

var morse = { 
    "a": ". -",
    "b": "- . . .",
    "c": "- . - .",
    "d": "- . .",
    "e": ".",
    "f": ". . - .",
    "g": "- - .",
    "h": ". . . .",
    "i": ". .",
    "j": ". - - -",
    "k": "- . -",
    "l": ". - . .",
    "m": "- -",
    "n": "- .",
    "o": "- - -",
    "p": ". - - .",
    "q": "- - . -",
    "r": ". - .",
    "s": ". . .",
    "t": "-",
    "u": ". . -",
    "v": ". . . -",
    "w": ". - -",
    "x": "- . . -",
    "y": "- . - -",
    "z": "- - . .",
    "1": ". - - - -",
    "2": ". . - - -",
    "3": ". . . - -",
    "4": ". . . . -",
    "5": ". . . . .",
    "6": "- . . . .",
    "7": "- - . . .",
    "8": "- - - . .",
    "9": "- - - - .",
    "0": "- - - - -",
    " ": "/"
};

var testo = document.getElementById("testo").innerHTML.toLowerCase();
var testoCodificato = document.getElementById("testoCodificato");

var testoArray = testo.split("");
var risultato = "";

for(var cont = 0; cont<testo.length ; cont++) {
    risultato += morse[testoArray[cont]];
    risultato += "   ";
}

testoCodificato.innerHTML = risultato;

function setup() {
  // Sets the screen to be 640 pixels wide and 360 pixels high
  createCanvas(1600, 400);
}

function draw() {
  // Set the background to black and turn off the fill color
  background(0);
  noFill();

  fill(255);
  noStroke();

  
  
}


var svgNS = svg.namespaceURI;

codice = risultato.split("");
initX = margineX;
initY = margineY;

  for(var c = 0; c<codice.length ; c++) {

      var rect = document.createElementNS(svgNS,'rect');

    if (codice[c]=="."){
        rect.setAttribute('x',initX);
        rect.setAttribute('y',initY);
        rect.setAttribute('width',punto);
        rect.setAttribute('height',punto);
        rect.setAttribute('fill','#000000');
        svg.appendChild(rect);
        initX += punto;
    } else if (codice[c]=="-"){
        rect.setAttribute('x',initX);
        rect.setAttribute('y',initY);
        rect.setAttribute('width',linea);
        rect.setAttribute('height',punto);
        rect.setAttribute('fill','#000000');
        svg.appendChild(rect);
        initX += linea;
    } else if (codice[c]=="/"){
        initX = margineX;
        initY += 2*punto; 
        if( codice[c+1]==" " &&  codice[c+2]==" " &&  codice[c+3]==" ") {
            c+=3;
        }
    } else if (codice[c]==" "){
        rect.setAttribute('x',initX);
        rect.setAttribute('y',initY);
        rect.setAttribute('width',punto);
        rect.setAttribute('height',punto);
        rect.setAttribute('fill','#FFFFFF');
        svg.appendChild(rect);
        initX += punto;
    } else {
        rect.setAttribute('x',initX);
        rect.setAttribute('y',initY);
        rect.setAttribute('width',punto);
        rect.setAttribute('height',punto);
        rect.setAttribute('fill','#00FF00');
        svg.appendChild(rect);
        initX += punto;
    }
    
    

  }



document.body.appendChild(svg);
   