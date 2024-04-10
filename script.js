

function MIDI2freq(a = 60, b = 440.0, c = 0) {//midiNote = 60, diapason = 440.0, pitch = 0
    let LA4MIDINOTE = 69;
    let the_power = (a + (c/100) - LA4MIDINOTE) / 12.0;
    let frequence = (2.0 ** the_power) * b;
    return Math.round(1000*frequence)/1000;
}
function compute() {
    let midiNote = (document.getElementById("note").value*1) + 12 * document.getElementById("octave").value;
    document.getElementById('freq').innerHTML = MIDI2freq(midiNote,document.getElementById("diapason").value,document.getElementById("pitch").value);
}
function increment(val,id,min,max) {
    var curVal = document.getElementById(id).value*1;
    var nextVal = curVal+val;
    if (nextVal>=min && nextVal<=max) {
        document.getElementById(id).value = nextVal;
        compute();
    }
}
document.getElementById("note").addEventListener("change",compute);
document.getElementById("octave").addEventListener("change",compute);
document.getElementById("diapason").addEventListener("input",compute);
document.getElementById("pitch").addEventListener("input",compute);
compute();

