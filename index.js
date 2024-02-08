// What is your favorite submission?
// I prefer to attack the (leg, arm, neck) using a (choose your submission) from the
// (cross-body, mount, back) position

class Submission {
    constructor(limb, attack, position) {
        this.limb = limb;
        this.attack = attack;
        this.position = position;
    }
}

class Position {
    constructor(position, description) {
        this.position = position;  // data should be a number
        this.description = description;  // String
    }
}

const submissions = [];

function createSubmission() {
    const limbOptions = ['leg', 'arm', 'neck'];
    const attackOption = prompt('Do you prefer to attack 1) the neck, 2) the arm, or 3) the leg?');
    
    if (!attackOption || isNaN(attackOption) || attackOption < 1 || attackOption > 3) {
        alert('Invalid input. Please choose a valid option.');
        return;
    }

    const limb = limbOptions[parseInt(attackOption) - 1];
    const attack = prompt(`I prefer to attack the ${limb} with a(n):`);

    const positionOption = prompt('Choose from the following numbers: 1) cross-body position, 2) mount position, 3) back position, 4) full-guard position');
    
    if (!positionOption || isNaN(positionOption) || positionOption < 1 || positionOption > 4) {
        alert('Invalid input. Please enter a number between 1 & 4.');
        return;
    }

    const positionDescriptions = ['cross-body position', 'mount position', 'back position', 'full-guard position'];
    const position = new Position(positionOption, positionDescriptions[positionOption - 1]);
    submissions.push(new Submission(limb, attack, position));
}

function viewSubmissions() {
    let submissionsString = 'Submissions:\n';

    for (const submission of submissions) {
        submissionsString += `I prefer to attack the ${submission.limb} with a(n) ${submission.attack} from the ${submission.position.description}.\n`;
    }

    alert(submissionsString);
}

function main() {
    while (true) {
        const choice = prompt('0) exit\n1) create submission\n2) view submissions');

        if (choice === '0') {
            alert('Goodbye!');
            break;
        } else if (choice === '1') {
            createSubmission();
        } else if (choice === '2') {
            viewSubmissions();
        } else {
            alert('Invalid input. Please choose a valid option.');
        }
    }
}

main();