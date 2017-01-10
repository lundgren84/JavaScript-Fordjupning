
function EuroToSek(Euro: number): number {
    let sek: number = Euro * (9.5);  
    return sek;
};
function SekToEuro(Sek: number): number {
    let euro:number = Sek / (9.5);  
    return euro;
};


function FillDivWithSek(): void {
    let EuroInput:number = parseFloat((<HTMLInputElement>document.getElementById('EuroInput')).value);
    let SekResult: number = EuroToSek(EuroInput);
    SekResult = Math.round(SekResult *10)/10;
    let result: string = '<h1>' + SekResult + ' SEK</h1>';
    FillInnerHtml(result);
}

function FillDivWithEuro(): void {
    let SekInput: number = parseFloat((<HTMLInputElement>document.getElementById('SekInput')).value);
    let euroResult: number = SekToEuro(SekInput);
    euroResult = Math.round(euroResult * 10) / 10;
    let result: string = '<h1>' + euroResult + ' Euro</h1>';
    FillInnerHtml(result);
}
function FillInnerHtml(content:string):void {
    (<HTMLElement>document.getElementById('ResultDiv')).innerHTML = content;
}