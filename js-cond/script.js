/* 
	Créez une variable age de type nombre et afectez lui une valeur.
	Créez une autre variable autorisation_entrer.

	Créez les conditions nécessaires qui affichent 
	"Vous êtes majeur. Autorisation d'entrer sur ce site sensible : true" dans un cas et
	"Vous êtes mineur. Autorisation d'entrer sur ce site sensible : false"
*/

	// var age = 25;
	// var autorisation_entrer = true;
	// if (age>5){
	// 	console.log("Vous étes majeur")
	// }
	// else{
	// 	console.log("vous étes mineur")
	// }
/* 
	Crééez une variable autorisation_entrer et donnez lui la valeur false par défaut.
	Si la personne a l'autorisation d'entrer affichez "vous pouvez poursuivre"
	Sinon, affichez "interdit d'aller plus loin gamin"
*/

	// var autorisation_entrer = 22;
	// var x = 18;
	// if(x >= autorisation_entrer){
	// 	alert("Vous pouvez poursuivre")
	// }
	// else{
	// 	alert("Interdit  d'aller plus loin gamin")
	// }


/* 
	Déclarez une variable "lang". Affectez lui une valeur "fr" ou "es" ou "en"
	Ecrire les conditions qui permettent d'afficher "Bonjour ça va ", "Holla que tal" ou "Hi how are you" en fonction de la langue choisie
	Version 2 : N'indiquez que les langues "fr" et "en" par défaut. Simplifiez les deux conditions via un opérateur ternaire
*/

	// var lang = "en"

	// switch(lang){
	// 	case "fr":
	// 		alert("Bonjour ça va");
	// 	case "es": 
	// 	alert("Holla que tal");
	// 	case "en":
	// 		alert("Hello world");
	// }
	lang=="en"? alert("Hi how are you?") : alert("Bonjour ça va?")


/* 
	Créeez les conditions nécessaires concernant les fourchettes de notation.
	Si la note est de 0, afficher : "Tas vraiment rien compris à la life !"
	Si la note est égale à 5, afficher : "T'es mauvais Jack"
	Si la note est égale à 10, afficher:"Tu as pile poile la moyenne, go bosser encore"
	Si la note est égale à 16, afficher : "Tu commences à gérer le steack"
	Si la note est égale à 20, afficher : "You are a GOD !"

	Version 2 : Rendre le programme plus "intelligent" en faisant des fourchettes de 0 à 5, de 6 à 10, de 11 à 15 et de 16 à 20
*/
	// var x = 10;
	// if(x<=5){
	// 	alert( "T'es mauvais Jack")

	// }
	// else if(5 < x <= 10){
	// 	alert( "Tu as pile poile la moyenne, go bosser encore")

	// }
	// else if(10 < x <= 16){
	// 	alert("Tu commences à gérer le steack")

	// }
	// else if(16 < x <= 20){
	// 	alert("You are a GOD !")

	// }

/* 
	Ecrire les conditions permettant de dire si la variable “a” est plus grande, égale ou plus petite que “b” et afficher le résultat.
	Exemple: Si a > b afficher a est plus grand que b et ainsi de suite.
	Version 1 : les variables sa et b sont affectées en "dur" dans le fichier JS
	Version 2 : Vous demandez à l'utilisateur d'entrer la valeur de a et la valeur de b puis vous affichez le lequel est le plus grand/petit ou égale
*/

	// var a = 10, b = 15;
	// var a = prompt("entrer la value pour a")
	// var b = prompt("entrer la value pour b")
	// if(a > b){
	// 	alert(a + " a is plus grand que b" + b)
	// }
	// else{
	// 	alert(b + " b est plus grand que a " + a)
	// }
/* 
	Déclarez 2 variables : une variable "chat" et une variable cat_number.
	Version 1 : Lorsqu'on entre un nombre entre 0 et 1, on affiche dans la console "j'ai 0 chat" (sans s). Pareil pour 1.
	Lorsqu'on entre un nombre supérieur à 1, on affiche dans la console "j'ai 10 chats" (avec un s) si le nombre entré est 10.
	
*/

	// var cat_number = parseInt(prompt("combien chat vous avez vous"))
	// var cat="chat"
	// if (cat_number<=1){
	// 		console.log("J'ai 0 " + cat);
	// 	}
	// else if(1 < cat_number <= 10){
	// 		console.log("J'ai " + cat_number +" "+ cat + "s")
	// }


/*
*	Demander a l'ulisateur un nombre (prompt)
*	Ensuite vous l'informez si son nombre est pair ou impair
*	Bonus : l'afficher sur browser , rouge pour impair , vert pour pair 

*/

	var nombre = parseInt(prompt("Entrer un nombre"));

		if (!isNaN(nombre)) {
		if (nombre % 2 === 0) {
			// alert("Votre nombre est pair");
			document.body.style.backgroundColor = "red"
		} else {
			// alert("Votre nombre est impair");
			document.body.style.backgroundColor= "green";
		}
		} else {
		alert("Ce n'est pas un nombre valide !");
		}

