var balance = 50;

        function getRandomColor() {
            var colors = ['yellow', 'white', 'violet', 'blue', 'red', 'green'];
            var randomIndex = Math.floor(Math.random() * colors.length);
            return colors[randomIndex];
        }

        function playGame() {
            var chosenColor = prompt("Choose a color (yellow, white, violet, blue, red, green):");

            var gameColor = getRandomColor();
            document.getElementById('gameColor').style.backgroundColor = gameColor;

            if (chosenColor.toLowerCase() === gameColor) {
                balance *= 2; // modoble if ma daog
                alert("yahaya sa boang oi balance: " + balance + " pesos.");
            } else {
                balance -= 5; // bobo makuhaan skill issue shyt
                alert("sorry bawi lang sunod balance:" + balance + " pesos.");
            }

            updateBalance();
        }

        function updateBalance() {
            document.getElementById('balance').textContent = "Balance: " + balance + " pesos";
        }