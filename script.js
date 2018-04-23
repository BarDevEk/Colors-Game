//MÓWI ILE JEST AKTYWNYCH KWADRATÓW W GRZE: 3 CZY 6
var nSquares = 6;
//STWÓRZ TABLICĘ Z KOLORAMI, KTÓRA MA nSquares ELEMENTÓW
var col = [];
// pColor TO KOLOR, KTÓRY TRZEBA ODGADNĄĆ
var pColor;
// PRZYPISZ DIVY, KTÓRE SĄ KWADRATAMI DO TABLICY sqs
var sqs = document.querySelectorAll(".sq");
// colDisplay TO NAZWA KOLORU DO ODGADNIĘCIA W H1
var colDisplay = document.getElementById("colDis");
// mes WYŚWIETLA KOMUNIKAT CORRECT LUB TRY AGAIN
var mes = document.querySelector("#mes");
// h1back USTAWIA TŁO H1
var h1back = document.querySelector("h1");
// PRZYCISK RESET
var resbutton = document.getElementById("reset");
// PRZYCISK ESASY
var ea = document.querySelector("#ea");
// PRZYCISK HARD
var ha = document.querySelector("#ha");
// modBut WYBIERA DIVY Z BUTTONAMI
var modBut = document.querySelectorAll(".mod");


init ();

function init (){
	//*******************FUNKCJA DLA ZMIANY POZIOMU TRUDNOŚCI EASY I HARD*************************
	// DLA KAŻDEGO ELEMENTU Z TABLICY modBut
	for(var i =0; i < modBut.length; i++){
		modBut[i].addEventListener("click", function(){
	// USUŃ KLASĘ SELECT Z OBU BUTTONÓW
			modBut[0].classList.remove("select");
			modBut[1].classList.remove("select");
	// PRZYPISZ KLASĘ SELECT DO KLIKNIĘTEGO BUTTONA
			this.classList.add("select");

			this.textContent ==="Easy" ? nSquares = 3: nSquares = 6;

		rt();
		});
}

		//******************************OKREŚLENIE, CZY KLIKNIĘTO W ODPOWIEDNI KWADRAT*********************************
	for ( var i =0; i<sqs.length; i++){

	//PRZYPISZ KAŻDEMU KWADRATOWI TŁO DLA ODPOWIADAJĄCEGO ELEMENTU Z TABLICY KOLORÓW COL	
		sqs[i].style.backgroundColor = col[i];

	//PO KLIKNIĘCIU NA DANY KWADRAT STWÓRZY ZMIENNĄ clColor KTÓRA PRZYJMIE KOLOR KLIKNIĘTEGO KWADRATA
		sqs[i].addEventListener("click" , function(){
			var clColor = (this.style.backgroundColor);

	//ZWYCIĘSTWO
			if (clColor === pColor){
				mes.textContent = "Correct!";
				mes.style.color = "green";
				changeCol(clColor);
				h1back.style.backgroundColor= clColor;
				resbutton.textContent="PLAY AGAIN !";
			}
	//NIETRAFIENIE KOLORU
			else{
	//ZMIEŃ KOLOR KWADRATA NA KOLOR TŁA
				this.style.backgroundColor = "#232323"; 
				mes.textContent="Try Again";
				mes.style.color = "red";
			}
		});
}
	rt();
}



// ***********************************PODMIENIA TŁO KWADRATÓW NA ZMIENNĄ CL********************************
function changeCol (cl){
	for (var i = 0; i<sqs.length; i++){
		sqs[i].style.backgroundColor = cl;
	}
}

//**********************TWORZY LOSOWĄ LICZBĘ CAŁKOWITĄ Z PRZEDZIAŁU 0 DO DŁUGOŚĆ COL*******************************
function colorPick(){
	var rand = Math.floor(Math.random() * col.length);
//ZWRACA ELEMENT TABLICY COL O INDEKSIE LOSOWYM, USTALONYM PRZEZ ZMIENNĄ RAND
	return col[rand];
}

//*********************LOSUJE ZMIENNE KOLORÓW**************************************
function randCol (){
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
//ZWRACA STRINGA ZE ŚCIEŻKĄ DO KOLORU POJEDYNCZEGO KWADRATA 
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}

//********************TWORZY I ZWRACA TABLICĘ Z LOSOWYMI KOLORAMI*********************************
function getRandCol (numb){
	var arr1 = [];
	for( var i =0; i < numb; i++){
		arr1.push(randCol() );
	}
	return arr1;
}

// FUNKCJA POMOCNICZA, KTÓRA RESETUJE USTAWIENIA
function rt (){
// TWORZY NOWĄ TABLICĘ Z nSquares KOLORAMI
	col = getRandCol (nSquares);
//WYBIERZ LOSOWY KOLOR Z TABLICY
	pColor = colorPick();
//USTAW TEN LOSOWY KOLOR W POLECENIU W H1
	colDisplay.textContent=pColor;
//PRZYPISZ DO KWADRATÓW KOLOR Z TABLICY COL
	for (var i = 0; i < sqs.length; i++){
// JEŚLI ISTNIEJE ELEMENT COL[i] TO PRZYPISZ SQS[i] WARTOŚĆ COL[i]
		if (col[i]){
			sqs[i].style.display ="block";
			sqs[i].style.backgroundColor=col[i]
		}
// JEŚLI NIE ISTNIEJE ELEMENT COL[i] to UKRYJ SQS[i], NP. PRZY TRYBIE EASY NIE ISTNIEJE COL[3,4,5], WIĘC UKRYWAMY SQS[3,4,5]
		else{
			sqs[i].style.display = "none";
		}
	}
//USTAW NA PRZYCIUSKU RESET NAPIS NEW COLORS
	resbutton.textContent=("New Colors");
// USTAW PIERWOTNE TŁO DLA H1
	h1back.style.backgroundColor = "steelblue";
//WYŁĄCZENIE NAPISU CORRECT LUB TRY AGAIN
	mes.textContent="";
}

// //*****************************PO KLIKNIĘCIU W PRZYCISK EASY***************************
// ea.addEventListener("click" , function(){
// //DODAJ DO EASY KLASĘ .SELECT
// 	ea.classList.add("select");
// //USUŃ Z HARD KLASĘ SELECT
// 	ha.classList.remove("select");
// //USTAW LICZBĘ KWADRATÓW NA 3
// 	nSquares = 3;
// //STWÓRZ TABLICĘ Z KOLORAMI, KTÓRA MA 3 ELEMENTY
// 	col = getRandCol (nSquares);
// //USTAW KOLOR, KTÓRY TRZEBA ODGADNĄĆ
// 	pColor = colorPick();
// //WSTAWIA W H1 NUMER KOLORU, KTÓRY TRZEBA KLIKNĄĆ
// colDisplay.textContent=pColor;

// for(var i = 0; i <sqs.length; i++){
// 	if(col[i]){
// 		sqs[i].style.backgroundColor=col[i];
// 	}
// 	else
// 		sqs[i].style.display="none";
// }

// });

// //********************* PO KLIKNIĘCIU W PRZYCISK HARD*******************************
// ha.addEventListener("click" , function(){
// //DODAJ DO PRZECISKU HARD KLASĘ SELECT
// 	ha.classList.add("select");
// //USUŃ KLASĘ SELECT Z PRZYCISKU EASY
// 	ea.classList.remove("select");
// //USTAW 6 KWADRATÓW W GRZE
// 	nSquares = 6;
// //STWÓRZ TABLICĘ Z KOLORAMI, KTÓRA MA 6 ELEMENTY
// 	col = getRandCol (nSquares);
// //USTAW KOLOR, KTÓRY TRZEBA ODGADNĄĆ
// 	pColor = colorPick();
// //WSTAWIA W H1 NUMER KOLORU, KTÓRY TRZEBA KLIKNĄĆ
// colDisplay.textContent=pColor;

// for(var i = 0; i <sqs.length; i++){
// 		sqs[i].style.backgroundColor=col[i];
// 		sqs[i].style.display="block";
// }
// });

//*************************KLIKNIĘCIE W PRZYCISK RESET****************************************
resbutton.addEventListener("click" , function(){
	rt();
});


