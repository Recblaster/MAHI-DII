window.onload = function () {
    let container = document.getElementById("container");
    let frameIndex = 1;

    function nextFrame() {
        if (frameIndex < 8) {
            frameIndex++;
            renderFrame();
        }
    }

    function renderFrame() {
        // Clear the container before appending the new frame elements
        container.innerHTML = '';

        let frame = document.createElement("div");
        frame.className = "frame frame-" + frameIndex;

        if (frameIndex === 1) {
            createTextBox(frame, "It's Your Special Day Yeyey!🥳", "Next", nextFrame);
        } else if (frameIndex === 2) {
            createTextBox(frame, "Made something special for you, who is special to me🤗", "Next", nextFrame);
        } else if (frameIndex === 3) {
            createTextBox(frame, "Wanna see what I've made?", "Let's Gooo 🥳", nextFrame);
        } else if (frameIndex === 4) {
            createTextBox(frame, "Have a look at it madam jii😊", "Wait", async function() {
                await wait3Seconds();
                nextFrame();
            });
        } else if (frameIndex === 5) {
            frame.style.backgroundColor = "black";
            createButton(frame, "Lights On", function() {
                document.body.style.backgroundColor = "pink";
                nextFrame();
            });
        } else if (frameIndex === 6) {
            createButton(frame, "Decorate", function() {
                createTextBox(frame, "🎉Happy Birthday Sharayu🎉", "Fly the balloons", nextFrame);
                addBalloons();
            });
        } else if (frameIndex === 7) {
            createTextBox(frame, "Lets cut the cake Madam jiii!!", "🎂 SHARAYU", function() {
                showConfetti();
                alert("🎉HAPPY BIRTHDAY SHARAYU🎉");
                nextFrame();
            });
        } else if (frameIndex === 8) {
            createFloatingHearts();
            createTextBox(frame, "Dii! I know it has been a very short time since we've met but i've enjoyed every moment with you. Irl i have only one cousin sister but she also lives far away, thats why I make new didis online 😂. Its my style of bday gifting my close ones. Blessed to be ur bro. From the very first conversation, your kindness and caring nature made me feel like I’ve known you forever. I feel incredibly lucky to have crossed paths with you. So, on your special day, I wanted to pour my heart out and let you know just how much you mean to me. You are a rare gem, and I am blessed to call you my Dii. Here's to many more joyful moments and cherished memories together. Happy Birthday, Dii! May your day be filled with love, laughter, and everything your heart desires. ~Yours ausom Iro_xD!😉", "Hope You Liked this", function() {
                // No alert message here
            });
        }

        container.appendChild(frame);
    }

    function createTextBox(frame, text, buttonText, buttonAction) {
        let textbox = document.createElement("div");
        textbox.className = "textbox";
        let p1 = document.createElement("p");
        p1.className = "center";
        p1.textContent = "✨";
        let p2 = document.createElement("p");
        p2.className = "center";
        p2.textContent = text;
        let button = document.createElement("button");
        button.className = "button";
        button.textContent = buttonText;
        button.onclick = buttonAction;
        textbox.appendChild(p1);
        textbox.appendChild(p2);
        textbox.appendChild(button);
        frame.appendChild(textbox);
    }

    function createButton(frame, text, buttonAction) {
        let button = document.createElement("button");
        button.className = "button";
        button.textContent = text;
        button.onclick = buttonAction;
        frame.appendChild(button);
    }

    function wait3Seconds() {
        return new Promise(resolve => setTimeout(resolve, 3000));
    }

    function createFloatingHearts() {
        for (let i = 0; i < 20; i++) {
            let heart = document.createElement("div");
            heart.className = "heart";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.animationDuration = Math.random() * 2 + 3 + "s";
            document.body.appendChild(heart);
        }
    }

    function addBalloons() {
        for (let i = 0; i < 10; i++) {
            let balloon = document.createElement("div");
            balloon.className = "balloon";
            balloon.style.left = (i * 10) + "%";
            balloon.style.animationDuration = Math.random() * 2 + 2 + "s";
            document.body.appendChild(balloon);
        }
    }

    function showConfetti() {
        for (let i = 0; i < 100; i++) {
            let confetti = document.createElement("div");
            confetti.className = "confetti";
            confetti.style.left = Math.random() * 100 + "vw";
            confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 75%)`;
            document.body.appendChild(confetti);
        }
    }

    renderFrame();
}
