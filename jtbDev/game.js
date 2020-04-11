const textElement = document.getElementById("text");
const optionButtonsElement = document.getElementById("option-buttons");

let state = {}

function startGame() {
    state = {}
    showTextNode(1)

}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
    textElement.innerText = textNode.text;

    while(optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {
        if(showOption(option)) {
            const button = document.createElement("button");
            button.innerText = option.text;
            button.classList.add("btn");
            button.addEventListener("click", () => selectOption(option));
            optionButtonsElement.appendChild(button);
        }
    })

}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state);

}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    if(nextTextNodeId <= 0) {
        return startGame();
    }
    state = Object.assign(state, option.setState);
    showTextNode(nextTextNodeId);

}

const textNodes = [
    {
        id: 1,
        text: "You wake up with an arrow in your knee, AAAGH",
        options: [
            {
                text: "Pull it out!",
                setState: {arrow: true},
                nextText: 2
            },
            {
                text: "Leave it where it is",
                nextText: 2,
            }
        ]

    },

    {
        id: 2,
        text: "Uuuh...that's a lot of blood.",
        options: [
            {
                text: "Quick put the arrow back to stop the bleeding!",
                requiredState: (currentState) => currentState.arrow,
                setState: {arrow: false},
                nextText: 3
            },
            {
                text: "Well the arrow is still there, maybe pressure will help?",
                nextText: 3
            }
        ]
    
    },
    {
        id: 3,
        text: "Ooooh, feeling woozy",
        options: [
            {
                text: "Pass out?",
                nextText: 4
            },
            {
                text: "Muscle through it!",
                nextText: 5
            }
        ]
    },
    {
        id: 4,
        text: "Ah the sweet embrace of unconsciousness",
        options: [
            {
                text: "Restart",
                nextText: -1
            }
        ]
    },
    {
        id: 5,
        text: "You try and fail miserably, blacking out",
        options: [
            {
                text: "Restart",
                nextText: -1
            }
        ]
    }

]

startGame();

