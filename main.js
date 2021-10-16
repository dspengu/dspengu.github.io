function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


function getLineNumber(textarea) {
    return textarea.value.substr(0, textarea.selectionStart)
        .split("\n")
        .map((line) => 1 + Math.floor(line.length / textarea.cols))
        .reduce((a, b) => a + b, 0);
};

function getnumber() {
    number1 = document.getElementById("inputNumber1").value;
    number2 = document.getElementById("inputNumber2").value;
    number1 = parseInt(number1);
    number2 = parseInt(number2);
    if (number1 > number2) {
        alert("Pierwsza liczba nie może być większa od drugiej.")
        return;
    }
    console.log(number1, number2);
    randomNumber = getRndInteger(number1, number2);
    console.log(randomNumber);
    document.getElementById("outputperson").value = randomNumber.toString();
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// RANDOM PERSON
function getperson() {
    const teamsText = document.getElementById("inputTeams").value;
    if (teamsText.length < 2) {
        alert('Nieprawidłowa ilość osób.')
        return;
    }
    teams = teamsText.match(/[^\r\n]+/g);;
    shuffle(teams);
    console.log(teams);
    osoba = teams[1];
    document.getElementById("outputperson").value = "\n" + osoba;
}

// GET TEAMS
function getteams() {
    if (getLineNumber(inputTeams) > 10) {
        alert('Nieprawidłowa ilość uczestników.')
        return;
    }
    const teamsText = document.getElementById("inputTeams").value;
    teams = teamsText.match(/[^\r\n]+/g);;
    shuffle(teams);
    var array1 = teams;
    var array2 = array1.splice(0, Math.ceil(array1.length / 2));
    array1.toString().split(",");
    array2.toString().split(",");

    var x, txt = "";
    team1 = [];
    for (x in array1) {
        txt = '';
        txt += array1[x] + " ";
        countVar = parseInt(x) + 1;
        team1.push(txt + "\n");
    }

    var x, txt = "";
    team2 = [];
    for (x in array2) {
        txt = '';
        txt += array2[x] + " ";
        countVar = parseInt(x) + 1;
        team2.push(txt + "\n");
    }
    team1 = team1.join().replace(',', '');
    team2 = team2.join().replace(',', '');
    team1 = team1.replace(',', '');
    team2 = team2.replace(',', '');
    team1 = team1.replace(',', '');
    team2 = team2.replace(',', '');
    team1 = team1.replace(',', '');
    team2 = team2.replace(',', '');
    console.log(outputteams)
    document.getElementById("outputteams").value = team1;
    document.getElementById("outputteams2").value = team2;
}

function format(item, index) {
    console.log(index, item);
}