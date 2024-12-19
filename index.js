import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter First number", types: "number", name: "firstnumber" },
    {
        message: "select One of the operators to perform operation",
        type: "list",
        name: "operator",
        choices: ["+", "-", "*", "/"],
    },
    { message: "Enter Second number", types: "number", name: "secondnumber" }
]);
// conditional statement
if (answer.operator === "+") {
    console.log(Number(answer.firstnumber) + Number(answer.secondnumber));
    console.log(Number(answer.firstnumber) + answer.secondnumber);
}
else if (answer.operator === "-") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === "*") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operator === "/") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else {
    console.log("Please select valid operator");
}
