function EuroToSek(Euro) {
    var sek = Euro * (9.5);
    return sek;
}
;
function SekToEuro(Sek) {
    var euro = Sek / (9.5);
    return euro;
}
;
function FillDivWithSek() {
    var EuroInput = parseFloat(document.getElementById('EuroInput').value);
    var SekResult = EuroToSek(EuroInput);
    SekResult = Math.round(SekResult * 10) / 10;
    var result = '<h1>' + SekResult + ' SEK</h1>';
    FillInnerHtml(result);
}
function FillDivWithEuro() {
    var SekInput = parseFloat(document.getElementById('SekInput').value);
    var euroResult = SekToEuro(SekInput);
    euroResult = Math.round(euroResult * 10) / 10;
    var result = '<h1>' + euroResult + ' Euro</h1>';
    FillInnerHtml(result);
}
function FillInnerHtml(content) {
    document.getElementById('ResultDiv').innerHTML = content;
}
//# sourceMappingURL=TS_Lab1.js.map