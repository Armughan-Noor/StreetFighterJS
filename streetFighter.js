const streetFighterCharacters = [
  "Ryu",
  "Ken",
  "Chun-Li",
  "Guile",
  "Zangief",
  "Dhalsim",
  "E. Honda",
  "Blanka",
  "Balrog",
  "Vega",
  "Sagat",
  "M. Bison",
  "Cammy",
  "Akuma",
  "Sakura",
  "Rose",
  "Dan",
  "Fei Long",
  "T. Hawk",
  "Dee Jay",
  "Cody",
  "Guy",
  "Adon",
  "Gen",
  "Hakan",
  "Oni",
  "Juri",
  "Yun",
  "Yang",
  "Evil Ryu",
  "Rolento",
  "Elena",
  "Poison",
  "Hugo",
  "Decapre",
  "El Fuerte",
  "Gouken",
  "Seth",
  "Abel",
  "C. Viper",
  "Fuerte",
  "Gill",
  "G",
  "Kolin",
  "Ed",
  "Falke",
  "Menat",
  "Nash",
  "Necalli",
  "Rashid",
  "Urien",
  "Laura",
  "Zeku",
  "Seth",
  "Lucia",
  "Gill",
  "Kage",
];
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function displayMatchDetailsInningsOne() {
  document.write(
    "Below of is the list of charcaters for street fighter game. Input the character number as shown to choose any character." +
      "<br><br>"
  );
  await delay(3000);
  for (var i = 0; i < streetFighterCharacters.length; i++) {
    document.write(i + 1 + ". " + streetFighterCharacters[i] + "<br>");
    await delay(100);
  }
  await delay(5000);
  var player1 = prompt("Enter the character number of player 1");
  if (player1 == "") {
    player1 = Math.floor(Math.random() * 58) + 1;
  }
  var player2 = Math.floor(Math.random() * 58) + 1;
  document.write(
    "<br><br><b>Player 1:</b> " + streetFighterCharacters[player1 - 1] + "<br>"
  );
  document.write(
    "<b>Player 2:</b> " + streetFighterCharacters[player2 - 1] + "<br><br>"
  );
  await delay(3000);

  document.write(
    "<b>Match between </b> " + streetFighterCharacters[player1 - 1]+" <b>and</b> "+streetFighterCharacters[player2-1]+" <b>will start in 5 seconds. Get Ready!!</b> " + "<br><br>"
  );
  await delay(5000);

  document.write(
    "<b>Match Started. </b> "  + "<br><br>"
  );
  await delay(1000);



  var player1Health = 100;
  var player2Health = 100;
  var player1Attack;
  var player2Attack;
  var attack = ["Punch", "Kick", "Hadouken", "Jump", "Special Attack"];
  do {
    player1Attack = prompt(
      "Enter the attack value for player 1  1: Punch  2: Kick  3: Hadouken  4: Jump  5:  Special Attack"
    );
    if (player1Attack == "") {
      player1Attack = Math.floor(Math.random() * 5) + 1;
    }
    player2Attack = Math.floor(Math.random() * 5) + 1;
    if (player2Attack != "4") {
      switch (player1Attack) {
        case "1":
          player2Health = player2Health - 10;
          break;
        case "2":
          player2Health = player2Health - 10;
          break;
        case "3":
          player2Health = player2Health - 15;
          break;
        case "4":
          break;
        case "5":
          player2Health = player2Health - 30;
          break;
        default:
          break;
      }
    }

    if (player1Attack != "4") {
      switch (player2Attack) {
        case 1:
          player1Health = player1Health - 10;
          break;
        case 2:
          player1Health = player1Health - 10;
          break;
        case 3:
          player1Health = player1Health - 15;
          break;
        case 4:
          break;
        case 5:
          player1Health = player1Health - 30;
          break;
        default:
          break;
      }
    }
    if (player1Health > 0 && player2Health > 0) {
      document.write(streetFighterCharacters[player1-1]+" performed " + attack[player1Attack - 1] + "<br>");
      document.write(streetFighterCharacters[player2-1]+" performed " + attack[player2Attack - 1] + "<br>");
      document.write(streetFighterCharacters[player1-1]+"<b> Health:</b> " + player1Health + "<br>");
      document.write(streetFighterCharacters[player2-1]+"<b> Health:</b> " + player2Health + "<br><br>");
      await delay(3000);
    } else if (player1Health <= 0) {
      player1Health = 0;
      document.write(streetFighterCharacters[player1-1]+" performed " + attack[player1Attack - 1] + "<br>");
      document.write(streetFighterCharacters[player2-1]+" performed " + attack[player2Attack - 1] + "<br>");
      document.write(streetFighterCharacters[player1-1]+"<b> Health:</b> " + player1Health + "<br>");
      document.write(streetFighterCharacters[player2-1]+"<b> Health:</b> " + player2Health + "<br><br>");
      document.write(streetFighterCharacters[player2-1]+"<b> won the Match </b>" + "<br>");
    } else if (player2Health <= 0) {
      player2Health = 0;
      document.write(streetFighterCharacters[player1-1]+" performed " + attack[player1Attack - 1] + "<br>");
      document.write(streetFighterCharacters[player2-1]+" performed " + attack[player2Attack - 1] + "<br>");
      document.write(streetFighterCharacters[player1-1]+"<b> Health:</b> " + player1Health + "<br>");
      document.write(streetFighterCharacters[player2-1]+"<b> Health:</b> " + player2Health + "<br><br>");
      document.write(streetFighterCharacters[player1-1]+"<b> won the Match<b> " + "<br>");
    }
  } while (player1Health > 0 && player2Health > 0);
}

displayMatchDetailsInningsOne();
