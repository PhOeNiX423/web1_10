function z1() {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

    function draw_line() {
        ctx.beginPath();
        ctx.fillStyle = '#607D8B';
        ctx.fillRect(126, 0, 10, 400);
        ctx.fillRect(262, 0, 10, 400);
        ctx.fillRect(0, 126, 400, 10);
        ctx.fillRect(0, 262, 400, 10);
    }
    draw_line();

    const buttonNewRound = document.querySelector('#button1');
    const buttonReset = document.querySelector('#button2');
    let firstPlayerWins = document.querySelector('#firstPlayer');
    let secondPlayerWins = document.querySelector('#secondPlayer');
    let whoturn = document.querySelector('#whoturn');

    let field = [
    	['', '', ''],
    	['', '', ''],
    	['', '', '']
	];
    let count = 0;

    var winIndex = [
	    [field[0][0], field[0][1], field[0][2]],
	    [field[1][0], field[1][1], field[1][2]],
	    [field[2][0], field[2][1], field[2][2]],
	    [field[0][0], field[1][0], field[2][0]],
	    [field[0][1], field[1][1], field[2][1]],
	    [field[0][2], field[1][2], field[2][2]],
	    [field[0][0], field[1][1], field[2][2]],
	    [field[0][2], field[1][1], field[2][0]]
	];

    canvas.addEventListener('click', canvasClick);
    let biasX = 0;
    let biasY = 0;
    let playerFirst = 0;
    let playerSecond = 0;
    let breakGame = false;
    let currentPlayer = 0;
    let winner = 'first';

    const playerFirstName = 'X';
    const playerSecondName = 'O';

    whoturn.textContent = `Your turn - ${playerFirstName}`;

    function canvasClick(click) {
        biasX = click.offsetX;
        biasY = click.offsetY;
        playersMoveText();

        if (breakGame == false) {
            if (biasX < 130 && biasY < 130 && field[0][0] != 'X' && field[0][0] != 'O') {
                if (currentPlayer % 2 == 0) {
                    printTopLeftX();
                    field[0][0] = 'X';
                } else {
                    printTopLeftO();
                    field[0][0] = 'O';
                }
                currentPlayer += 1;
            } else if (biasX < 260 && biasY < 130 && biasX > 130 && field[0][1] != 'X' && field[0][1] != 'O') {
                if (currentPlayer % 2 == 0) {
                    printTopCenterX();
                    field[0][1] = 'X';
                } else {
                    printTopCenterO();
                    field[0][1] = 'O';
                }
                currentPlayer += 1;
            } else if (biasX < 390 && biasY < 130 && biasX > 260 && field[0][2] != 'X' && field[0][2] != 'O') {
                if (currentPlayer % 2 == 0) {
                    printTopRightX();
                    field[0][2] = 'X';
                } else {
                    printTopRightO();
                    field[0][2] = 'O';
                }
                currentPlayer += 1;
            } else if (biasX < 130 && biasY < 260 && biasX > 0 && biasY > 130 && field[1][0] != 'X' && field[1][0] != 'O') {
                if (currentPlayer % 2 == 0) {
                    printCenterLeftX();
                    field[1][0] = 'X';
                } else {
                    printCenterLeftO();
                    field[1][0] = 'O';
                }
                currentPlayer += 1;
            } else if (biasX < 260 && biasY < 260 && biasX > 130 && biasY > 130 && field[1][1] != 'X' && field[1][1] != 'O') {
                if (currentPlayer % 2 == 0) {
                    printCenterCenterX();
                    field[1][1] = 'X';
                } else {
                    printCenterCenterO();
                    field[1][1] = 'O';
                }
                currentPlayer += 1;
            } else if (biasX < 390 && biasY < 260 && biasX > 260 && biasY > 130 && field[1][2] != 'X' && field[1][2] != 'O') {
                if (currentPlayer % 2 == 0) {
                    printCenterRightX();
                    field[1][2] = 'X';
                } else {
                    printCenterRightO();
                    field[1][2] = 'O';
                }
                currentPlayer += 1;
            } else if (biasX < 130 && biasY < 390 && biasX > 0 && biasY > 260 && field[2][0] != 'X' && field[2][0] != 'O') {
                if (currentPlayer % 2 == 0) {
                    printBottomLeftX();
                    field[2][0] = 'X';
                } else {
                    printBottomLeftO();
                    field[2][0] = 'O';
                }
                currentPlayer += 1;
            } else if (biasX < 260 && biasY < 390 && biasX > 130 && biasY > 260 && field[2][1] != 'X' && field[2][1] != 'O') {
                if (currentPlayer % 2 == 0) {
                    printBottomCenterX();
                    field[2][1] = 'X';
                } else {
                    printBottomCenterO();
                    field[2][1] = 'O';
                }
                currentPlayer += 1;
            } else if (biasX < 390 && biasY < 390 && biasX > 260 && biasY > 260 && field[2][2] != 'X' && field[2][2] != 'O') {
                if (currentPlayer % 2 == 0) {
                    printBottomRightX();
                    field[2][2] = 'X';
                } else {
                    printBottomRightO();
                    field[2][2] = 'O';
                }
                currentPlayer += 1;
            } else {
                document.getElementById("modal").style.opacity = "1";
                h1result.innerHTML = ('This place taken!');
                h1result.style.fontFamily = "'Tw Cen MT', Tw Cen";
                h1result.style.fontSize = "60px";
                h1result.style.color = "#106AB1";
                h1result.style.textAlign = "center";
                h1result.style.zIndex = '100';
                h1result.style.display = 'flex';
                h1result.style.left = '37%';
                h1result.style.right = '12%';
                h1result.style.top = '5.5%';
            }
            winIndex = [
	    [field[0][0], field[0][1], field[0][2]],
	    [field[1][0], field[1][1], field[1][2]],
	    [field[2][0], field[2][1], field[2][2]],
	    [field[0][0], field[1][0], field[2][0]],
	    [field[0][1], field[1][1], field[2][1]],
	    [field[0][2], field[1][2], field[2][2]],
	    [field[0][0], field[1][1], field[2][2]],
	    [field[0][2], field[1][1], field[2][0]]
	];
            if_wineer();
        }

        draw();
    }


    function if_wineer() {
        var win1 = false;
        var win2 = false;
        console.log('start check for winer');
        for (let i = 0; i <= winIndex.length - 1; i++) {

            console.log('index = ', winIndex[i][0]);
            if (winIndex[i][0] == winIndex[i][1] && winIndex[i][1] == winIndex[i][2] && winIndex[i][2] == 'X') {
                win1 = true;
                console.log('win1 =', true);
                break;
            } else if (winIndex[i][0] == winIndex[i][1] && winIndex[i][1] == winIndex[i][2] && winIndex[i][2] == 'O') {
                win2 = true;
                console.log('win2 =', true);;
                break;
            }
        }
        if (win1 == true) {
            playerFirst += 1;
            firstPlayerWinsFunc();
            breakGame = true;
        } else if (win2 == true) {
            playerSecond += 1;
            secondPlayerWinsFunc();
            breakGame = true;
        }

    }

    function draw() {
        for (let i = 0; i < 3; ++i) {
            for (let j = 0; j < 3; ++j) {
                if (field[i][j] == '') {
                    count += 1;
                }
            }
        }
        if (count == 0) {
            document.getElementById("modal").style.opacity = "1";
            h1result.innerHTML = ('DRAW');
        }
        console.log(count);
        count = 0;
    }

    function playersMoveText() {
        if (winner == 'first') {
            if (currentPlayer % 2 == 1) {
                whoturn.textContent = `Your turn - ${playerFirstName}`;
            } else if (currentPlayer % 2 == 0) {
                whoturn.textContent = `Your turn - ${playerSecondName}`;
            }
        } else if (winner == 'second') {
            if (currentPlayer % 2 == 0) {
                whoturn.textContent = `Your turn - ${playerFirstName}`;
            } else if (currentPlayer % 2 == 1) {
                whoturn.textContent = `Your turn - ${playerSecondName}`;
            }
        }
    }
    let close = document.getElementById('close');
    let h1result = document.getElementById('result');

    close.onclick = closeModal;

    function closeModal() {
        document.getElementById("modal").style.opacity = "0";
    }

    document.getElementById("modal").style.opacity = "0";

    function firstPlayerWinsFunc() {
        winner = 'first';
        count = 0;
        firstPlayerWins.textContent = `First player (X) : ${playerFirst}`;
        firstPlayerWins.style.fontFamily = "'Tw Cen MT', Tw Cen";
        firstPlayerWins.style.fontSize = "20px";
        firstPlayerWins.style.color = "#1D83D4";
        firstPlayerWins.style.textAlign = "center";
        whoturn.textContent = `Your turn - ${playerFirstName}`;
        document.getElementById("modal").style.opacity = "1";
        h1result.innerHTML = ('First player - X - is winner! <br> Нажмите Reset, чтобы продолжить игру <br> Нажмите New game, чтобы начать новую');
        h1result.style.fontFamily = "'Tw Cen MT', Tw Cen";
        h1result.style.fontSize = "40px";
        h1result.style.color = "#106AB1";
        h1result.style.textAlign = "center";
        h1result.style.left = '13%';
        h1result.style.right = '12%';
        document.getElementById("canvas").style.opacity = "0.4";
    }



    function secondPlayerWinsFunc() {
        winner = 'second';
        count = 0;
        secondPlayerWins.textContent = `Second player : ${playerSecond}`;
        secondPlayerWins.style.fontFamily = "'Tw Cen MT', Tw Cen";
        secondPlayerWins.style.fontSize = "20px";
        secondPlayerWins.style.color = "#1D83D4";
        secondPlayerWins.style.textAlign = "center";
        whoturn.textContent = `Your turn - ${playerFirstName}`;
        document.getElementById("modal").style.opacity = "1";
        h1result.style.fontFamily = "'Tw Cen MT', Tw Cen";
        h1result.style.fontSize = "60px";
        h1result.style.color = "#106AB1";
        h1result.style.textAlign = "center";
        h1result.style.left = '13%';
        h1result.style.right = '12%';
        h1result.innerHTML = ('Second player - O - is winner! <br> Нажмите Reset, чтобы продолжить игру');
        document.getElementById("canvas").style.opacity = "0.4";
    }

    buttonNewRound.addEventListener('click', () => {
        document.getElementById("canvas").style.opacity = "1";
        ctx.clearRect(0, 0, 400, 400);
        draw_line();
        field = [
	        ['', '', ''],
	    	['', '', ''],
	    	['', '', '']
	  	];
        currentPlayer = 0;
        count = 0;
        breakGame = false;
    });

    buttonReset.addEventListener('click', () => {
        document.getElementById("canvas").style.opacity = "1";
        ctx.clearRect(0, 0, 400, 400);
        draw_line();
        field = [
		    ['', '', ''],
		    ['', '', ''],
		    ['', '', '']
	  	];
        currentPlayer = 0;
        count = 0;
        winner = 'first';
        breakGame = false;
        playerFirst = 0;
        playerSecond = 0;
        whoturn.textContent = `Your turn - ${playerFirstName}`;
        firstPlayerWins.textContent = `First player: ${playerFirst}`;
        secondPlayerWins.textContent = `Second player: ${playerSecond}`;
        secondPlayerWins.style.fontFamily = "'Tw Cen MT', Tw Cen";
        secondPlayerWins.style.fontSize = "20px";
        secondPlayerWins.style.color = "#1D83D4";
        firstPlayerWins.style.fontFamily = "'Tw Cen MT', Tw Cen";
        firstPlayerWins.style.fontSize = "20px";
        firstPlayerWins.style.color = "#1D83D4";
        firstPlayerWins.style.textAlign = "center";
        secondPlayerWins.style.textAlign = "center";
    });

    function printTopLeftX() {
        ctx.beginPath();
        ctx.strokeStyle = '#F44336';
        ctx.lineWidth = 10;
        ctx.moveTo(15, 15);
        ctx.lineTo(110, 110);
        ctx.moveTo(109, 15);
        ctx.lineTo(15, 109);
        ctx.stroke();
    }

    function printTopCenterX() {
        ctx.beginPath();
        ctx.strokeStyle = '#F44336';
        ctx.lineWidth = 10;
        ctx.moveTo(150, 15);
        ctx.lineTo(245, 110);
        ctx.moveTo(245, 15);
        ctx.lineTo(150, 109);
        ctx.stroke();
    }

    function printTopRightX() {
        ctx.beginPath();
        ctx.strokeStyle = '#F44336';
        ctx.lineWidth = 10;
        ctx.moveTo(285, 15);
        ctx.lineTo(380, 110);
        ctx.moveTo(380, 15);
        ctx.lineTo(285, 109);
        ctx.stroke();
    }

    function printCenterLeftX() {
        ctx.beginPath();
        ctx.strokeStyle = '#F44336';
        ctx.lineWidth = 10;
        ctx.moveTo(15, 150);
        ctx.lineTo(110, 245);
        ctx.moveTo(110, 150);
        ctx.lineTo(15, 245);
        ctx.stroke();
    }

    function printCenterCenterX() {
        ctx.beginPath();
        ctx.strokeStyle = '#F44336';
        ctx.lineWidth = 10;
        ctx.moveTo(150, 150);
        ctx.lineTo(245, 245);
        ctx.moveTo(245, 150);
        ctx.lineTo(150, 245);
        ctx.stroke();
    }

    function printCenterRightX() {
        ctx.beginPath();
        ctx.strokeStyle = '#F44336';
        ctx.lineWidth = 10;
        ctx.moveTo(285, 150);
        ctx.lineTo(380, 245);
        ctx.moveTo(380, 150);
        ctx.lineTo(285, 245);
        ctx.stroke();
    }

    function printBottomLeftX() {
        ctx.beginPath();
        ctx.strokeStyle = '#F44336';
        ctx.lineWidth = 10;
        ctx.moveTo(15, 285);
        ctx.lineTo(110, 380);
        ctx.moveTo(110, 285);
        ctx.lineTo(15, 380);
        ctx.stroke();
    }

    function printBottomCenterX() {
        ctx.beginPath();
        ctx.strokeStyle = '#F44336';
        ctx.lineWidth = 10;
        ctx.moveTo(150, 285);
        ctx.lineTo(245, 380);
        ctx.moveTo(245, 285);
        ctx.lineTo(150, 380);
        ctx.stroke();
    }

    function printBottomRightX() {
        ctx.beginPath();
        ctx.strokeStyle = '#F44336';
        ctx.lineWidth = 10;
        ctx.moveTo(285, 285);
        ctx.lineTo(380, 380);
        ctx.moveTo(380, 285);
        ctx.lineTo(285, 380);
        ctx.stroke();
    }


    function printTopLeftO() {
        ctx.beginPath();
        ctx.arc(62, 62, 49, 0, 360);
        ctx.lineWidth = 10;
        ctx.strokeStyle = '#2196F3';
        ctx.stroke();
    }

    function printTopCenterO() {
        ctx.beginPath();
        ctx.arc(200, 62, 49, 0, 360);
        ctx.lineWidth = 10;
        ctx.strokeStyle = '#2196F3';
        ctx.stroke();
    }

    function printTopRightO() {
        ctx.beginPath();
        ctx.arc(338, 62, 49, 0, 360);
        ctx.lineWidth = 10;
        ctx.strokeStyle = '#2196F3';
        ctx.stroke();
    }

    function printCenterLeftO() {
        ctx.beginPath();
        ctx.arc(62, 200, 49, 0, 360);
        ctx.lineWidth = 10;
        ctx.strokeStyle = '#2196F3';
        ctx.stroke();
    }

    function printCenterCenterO() {
        ctx.beginPath();
        ctx.arc(200, 200, 49, 0, 360);
        ctx.lineWidth = 10;
        ctx.strokeStyle = '#2196F3';
        ctx.stroke();
    }

    function printCenterRightO() {
        ctx.beginPath();
        ctx.arc(338, 200, 49, 0, 360);
        ctx.lineWidth = 10;
        ctx.strokeStyle = '#2196F3';
        ctx.stroke();
    }

    function printBottomLeftO() {
        ctx.beginPath();
        ctx.arc(62, 338, 49, 0, 360);
        ctx.lineWidth = 10;
        ctx.strokeStyle = '#2196F3';
        ctx.stroke();
    }

    function printBottomCenterO() {
        ctx.beginPath();
        ctx.arc(200, 338, 49, 0, 360);
        ctx.lineWidth = 10;
        ctx.strokeStyle = '#2196F3';
        ctx.stroke();
    }

    function printBottomRightO() {
        ctx.beginPath();
        ctx.arc(338, 338, 49, 0, 360);
        ctx.lineWidth = 10;
        ctx.strokeStyle = '#2196F3';
        ctx.stroke();
    }
}
