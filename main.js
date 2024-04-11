import { adatLISTA} from "./adat.js";
/*jelenítsük meg az adatokat egy táblázatban az adatok div-ben az urlap divben legyen egy űrlap, amivel ilyen adatokat tudunk a táblázatba

beletenni 

1.ha a táblázat fejlécére kattintunk, akkor azon a mező szerit tudunk rendezni a táblázatot.
2.tudjuk töörlni a táblázat adott sorait.
3.legyen egy szűrőmező ,ahova beírva szavakat,tudunk szűrni,név szerint.

Milyen függvények kellenek?

1.tabblazatOsszeallít(lista)->txt - összeállítja a html kódot szöveges formátumban
2.Megjelenítés függvény(txt)->nincs - megjelenít ehy htm sszoveget egy html elemben 
3.tablazatbaTesz()-> - összeszedi az űrlap adatokat lés hozzáfűzi az listához , majd megjeleníti újra a táblázatot.
4.tablazatRendez() - adptt ,ező szerint a atávlázatot. - akkor hívódik meg a táblázat megha az adott fejlécemezőjére kattintunk
és újra megjelenítjük a táblázatot.
5.sorTorles(lista)- minden sor végén legyen egy kuka, erre a kukára kattintva töröljük az adott sort a listáből,
és újra megjeleníti a táblázatot a módosult listával.
6.szuresNevSzerint() - aszűrés név szerint ki listázza ada adatokat a listából
*/

