// Function to determine who they're friend should be
$("#submit").click(function (response) {
    console.log("You're best friend should be " + bestFriend);

    values();
    checkUsers();
});

// Array to hold users
var people = [
    {
        "name": "Ahmed",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    },
      {
        "name": "James Woods",
        "photo": "http://1.bp.blogspot.com/-p2B689wcGfw/UaYbTvqatjI/AAAAAAAANHM/Ah36ZmmQHIs/s1600/James+Woods.jpg",
        "scores": [
            3,
            3,
            4,
            5,
            5,
            5,
            1,
            3,
            3,
            3
        ]
    },
      {
        "name": "Doug Funny",
        "photo": "http://www.cartoonbucket.com/wp-content/uploads/2016/08/Daug-With-Friend.jpg",
        "scores": [
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3
        ]
    }
];

//Constructor to create new person for each submit
function Friend(name, answers) {
    this.name = name
    this.answers = values()
}

//Function to get values from answers to questionaire
function getValues(name) {
    var answers = document.getElementsByName(name);
    for (var i = 0; i < answers.length; i++) {
        if (answers[i].checked) {
            return answers[i].value;
        };
    };
}

//Function to get values for answers
function values() {

    JSON.stringify(
        parseInt(getValues("question1")),
        parseInt(getValues("question2")),
        parseInt(getValues("question3")),
        parseInt(getValues("question4")),
        parseInt(getValues("question5")),
        parseInt(getValues("question6")),
        parseInt(getValues("question7")),
        parseInt(getValues("question8")),
        parseInt(getValues("question9")),
        parseInt(getValues("question10")),
    );
    console.log(answers)
}

// Function to loop through each user

function checkUsers(bestFriend) {
    for (var i = 1; i < people.length; i++) {
        abs(people[i].answers - response.answers)
        if (people[i].total > person[i + 1].total) {
            people[i + 1] = bestFriend;
        }
    }
}