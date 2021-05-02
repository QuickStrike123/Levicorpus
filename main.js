var NameOfStudents = [];

function submit(){

        var DisplayStudentArray = [];

        for (var j = 1 ; j<=4 ; j++){

            var NameOfTheStudent =  document.getElementById("name_of_the_student_" + j).value;

            console.log(NameOfTheStudent);

            NameOfStudents.push(NameOfTheStudent);

        }

        console.log(NameOfStudents);

        var LenghtOfStudentArray = NameOfStudents.length;

        console.log(LenghtOfStudentArray);

        for (var k  = 0 ; k < LenghtOfStudentArray ; k++){

            DisplayStudentArray.push("<h4> - " + NameOfStudents[k] + "</h4>");

            console.log(DisplayStudentArray);

        }

        console.log(DisplayStudentArray);

        document.getElementById("display_name_with_commas").innerHTML = DisplayStudentArray;

        var ReoveCommas = DisplayStudentArray.join(" ");

        console.log(ReoveCommas);


        document.getElementById("display_name_without_commas").innerHTML = ReoveCommas;

        document.getElementById("submit_button").style.display = "none";

        document.getElementById("sort_button").style.display = "inline-block";

}

function sorting() {

    NameOfStudents.sort();

    console.log(NameOfStudents);

    var DisplayStudentArraySorting = [];

    var LenghtOfNameOfStudentArray = NameOfStudents.length;

    console.log(LenghtOfNameOfStudentArray);

    for (var k = 0 ; k < LenghtOfNameOfStudentArray ; k++) {

        DisplayStudentArraySorting.push("<h4>" + NameOfStudents[k] + "</h4>");

        console.log(DisplayStudentArraySorting);

    }

    var RemoveCommas = DisplayStudentArraySorting.join(" ");

    console.log(RemoveCommas);

    document.getElementById("display_name_without_commas").innerHTML = RemoveCommas;

}