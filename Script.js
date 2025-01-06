

var button = $("#btn");
button.on("click", function (e) {
    e.preventDefault();

    var rollNo = $("#rollno").val();
    var name = $("#name").val();
    var age = $("#age").val();

    if (!rollNo) {
        alert("Please enter your Roll no.");
    }
    if (!name) {
        alert("Please enter your Name.");
    }
    if (!age) {
        alert("Please enter your Age.");
    }

    var newDataRow = $("<tr></tr>");
    var rollNoCell = $("<td></td>").text(rollNo);
    var nameCell = $("<td></td>").text(name);
    var ageCell = $("<td></td>").text(age);

    newDataRow.append(rollNoCell, nameCell, ageCell);

    $("#student-tbody").append(newDataRow);

    $("#form-box")[0].reset();
});
