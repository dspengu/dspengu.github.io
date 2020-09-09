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
        console.log(txt);
    }

    var x, txt = "";
    team2 = [];
    for (x in array2) {
        txt = '';
        txt += array2[x] + " ";
        countVar = parseInt(x) + 1;
        team2.push(txt + "\n");
        console.log(txt);
    }
    team1 = team1.join().replace(',', '');
    team2 = team2.join().replace(',', '');
    team1 = team1.replace(',', '');
    team2 = team2.replace(',', '');
    team1 = team1.replace(',', '');
    team2 = team2.replace(',', '');
    team1 = team1.replace(',', '');
    team2 = team2.replace(',', '');
    console.log(team2)
    document.getElementById("outputteams").value = team1;
    document.getElementById("outputteams2").value = team2;
}

function format(item, index) {
    console.log(index, item);
}