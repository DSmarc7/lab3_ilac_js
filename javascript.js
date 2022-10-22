// LAB 3 JS MARC-ANTOINE DA SILVA

const user = prompt("How many courses did you finish?");

var numOfCourses = 0;

if (user != null) {
  numOfCourses = parseInt(user);
}

if (isNaN(numOfCourses)) {
  document.write("Invalid Input!");
}

var courseMarks = [];

for (var i = 0; i < numOfCourses; i++) {
  var mark = prompt("Enter your course mark for course " + (i + 1));
  courseMarks.push(mark);
}

for (var i = 0; i < courseMarks.length; i++) {
  document.write("Course " + (i + 1) + " mark is " + courseMarks[i] + "<br>");
}

var total = 0;
for (var i = 0; i < courseMarks.length; i++) {
  total += parseInt(courseMarks[i]);
}

document.write("Your total mark is " + total + "<br>");

var average = total / courseMarks.length;

if (average >= 90 && average <= 100) {
  document.write(
    "Your final average is " + parseInt(average) + "." + "Your grade is A"
  );
} else if (average >= 80 && average <= 89) {
  document.write(
    "Your final average is " + parseInt(average) + "." + "Your grade is B"
  );
} else if (average >= 70 && average <= 79) {
  document.write(
    "Your final average is " + parseInt(average) + "." + "Your grade is C"
  );
} else if (average >= 60 && average <= 69) {
  document.write(
    "Your final average is " + parseInt(average) + "." + "Your grade is D"
  );
} else if (average < 60) {
  document.write(
    "Your final average is " + parseInt(average) + "." + "Your grade is F"
  );
} else {
  document.write(
    "Sorry, All the marks have to be from minimum 0 to maximum 100!"
  );
}
