const dummyData = [
  "Anderson",
  "Ashwoon",
  "Aikin",
  "Bateman",
  "Bongard",
  "Bowers",
  "Boyd",
  "Cannon",
  "Cast",
  "Deitz",
  "Dewalt",
  "Ebner",
  "Frick",
  "Hancock",
  "Haworth",
  "Hesch",
  "Hoffman",
  "Kassing",
  "Knutson",
  "Lawless",
  "Lawicki",
  "Mccord",
  "McCormack",
  "Miller",
  "Myers",
  "Nugent",
  "Ortiz",
  "Orwig",
  "Ory",
  "Paiser",
  "Pak",
  "Pettigrew",
  "Quinn",
  "Quizoz",
  "Ramachandran",
  "Resnick",
  "Sagar",
  "Schickowski",
  "Schiebel",
  "Sellon",
  "Severson",
  "Shaffer",
  "Solberg",
  "Soloman",
  "Sonderling",
  "Soukup",
  "Soulis",
  "Stahl",
  "Sweeney",
  "Tandy",
  "Trebil",
  "Trusela",
  "Trussel",
  "Turco",
  "Uddin",
  "Uflan",
  "Ulrich",
  "Upson",
  "Vader",
  "Vail",
  "Valente",
  "Van Zandt",
  "Vanderpoel",
  "Ventotla",
  "Vogal",
  "Wagle",
  "Wagner",
  "Wakefield",
  "Weinstein",
  "Weiss",
  "Woo",
  "Yang",
  "Yates",
  "Yocum",
  "Zeaser",
  "Zeller",
  "Ziegler",
  "Bauer",
  "Baxster",
  "Casal",
  "Cataldi",
  "Caswell",
  "Celedon",
  "Chambers",
  "Chapman",
  "Christensen",
  "Darnell",
  "Davidson",
  "Davis",
  "DeLorenzo",
  "Dinkins",
  "Doran",
  "Dugelman",
  "Dugan",
  "Duffman",
  "Eastman",
  "Ferro",
  "Ferry",
  "Fletcher",
  "Fietzer",
  "Hylan",
  "Hydinger",
  "Illingsworth",
  "Ingram",
  "Irwin",
  "Jagtap",
  "Jenson",
  "Johnson",
  "Johnsen",
  "Jones",
  "Jurgenson",
  "Kalleg",
  "Kaskel",
  "Keller",
  "Leisinger",
  "LePage",
  "Lewis",
  "Linde",
  "Lulloff",
  "Maki",
  "Martin",
  "McGinnis",
  "Mills",
  "Moody",
  "Moore",
  "Napier",
  "Nelson",
  "Norquist",
  "Nuttle",
  "Olson",
  "Ostrander",
  "Reamer",
  "Reardon",
  "Reyes",
  "Rice",
  "Ripka",
  "Roberts",
  "Rogers",
  "Root",
  "Sandstrom",
  "Sawyer",
  "Schlicht",
  "Schmitt",
  "Schwager",
  "Schutz",
  "Schuster",
  "Tapia",
  "Thompson",
  "Tiernan",
  "Tisler"
];

const dummyData2 = [
  "Andersonn",
  "Ashwoon",
  "Aikin",
  "Bateman",
  "Bongard",
  "Bowers",
  "Boyd",
  "Cannon",
  "Cast",
  "Deitz",
  "Dewalt",
  "Ebner",
  "Frick",
  "Hancock",
  "Haworth",
  "Hesch",
  "Hoffman",
  "Kassing",
  "Knutson",
  "Lawless",
  "Lawicki",
  "Mccord",
  "McCormack",
  "Miller",
  "Myers",
  "Nugent",
  "Ortiz",
  "Orwig",
  "Ory",
  "Paiser",
  "Pak",
  "Pettigrew",
  "Quinn",
  "Quizoz",
  "Ramachandran",
  "Resnick",
  "Sagar",
  "Schickowski",
  "Schiebel",
  "Sellon",
  "Severson",
  "Shaffer",
  "Solberg",
  "Soloman",
  "Sonderling",
  "Soukup",
  "Soulis",
  "Stahl",
  "Sweeney",
  "Tandy",
  "Trebil",
  "Trusela",
  "Trussel",
  "Turco",
  "Uddin",
  "Uflan",
  "Ulrich",
  "Upson",
  "Vader",
  "Vail",
  "Valente",
  "Van Zandt",
  "Vanderpoel",
  "Ventotla",
  "Vogal",
  "Wagle",
  "Wagner",
  "Wakefield",
  "Weinstein",
  "Weiss",
  "Woo",
  "Yang",
  "Yates",
  "Yocum",
  "Zeaser",
  "Zeller",
  "Ziegler",
  "Bauer",
  "Baxster",
  "Casal",
  "Cataldi",
  "Caswell",
  "Celedon",
  "Chambers",
  "Chapman",
  "Christensen",
  "Darnell",
  "Davidson",
  "Davis",
  "DeLorenzo",
  "Dinkins",
  "Doran",
  "Dugelman",
  "Dugan",
  "Duffman",
  "Eastman",
  "Ferro",
  "Ferry",
  "Fletcher",
  "Fietzer",
  "Hylan",
  "Hydinger",
  "Illingsworth",
  "Ingram",
  "Irwin",
  "Jagtap",
  "Jenson",
  "Johnson",
  "Johnsen",
  "Jones",
  "Jurgenson",
  "Kalleg",
  "Kaskel",
  "Keller",
  "Leisinger",
  "LePage",
  "Lewis",
  "Linde",
  "Lulloff",
  "Maki",
  "Martin",
  "McGinnis",
  "Mills",
  "Moody",
  "Moore",
  "Napier",
  "Nelson",
  "Norquist",
  "Nuttle",
  "Olson",
  "Ostrander",
  "Reamer",
  "Reardon",
  "Reyes",
  "Rice",
  "Ripka",
  "Roberts",
  "Rogers",
  "Root",
  "Sandstrom",
  "Sawyer",
  "Schlicht",
  "Schmitt",
  "Schwager",
  "Schutz",
  "Schuster",
  "Tapia",
  "Thompson",
  "Tiernan",
  "Tisler"
];
const courseList = [];
sessionStorage.setItem("courseList", JSON.stringify(courseList));

function renderData() {
  renderSchools();
  renderCourses();
}

function renderSchools() {
  const schoolList = document.getElementById("allSchoolDropdownList");
  console.log("EXECUTION STARTS");
  dummyData.forEach((school) => {
    let html = `
      <li>
      <a
        href="#"
        onclick="selectSchool(this)"
        id="${school.split(" ")[0]}"
        class="block py-2 px-4"
        >${school}</a
      >
    </li>
      `;

    schoolList.innerHTML += html;
  });
}
function renderCourses() {
  const coursesList = document.getElementById("allCoursesDropDownList");
  console.log("EXECUTION STARTS");
  dummyData2.forEach((course) => {
    let html = `
        <li>
        <a
          href="#"
          id="${course.split(" ")[0]}__"
          onclick="addNewCourse(this)"
          class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >${course}</a
        >
      </li>
        `;

    coursesList.innerHTML += html;
  });
}

function renderSchoolsAccToSearch(data) {
  const schoolList = document.getElementById("allSchoolDropdownList");
  schoolList.innerHTML = "";
  console.log("EXECUTION STARTS");
  data.forEach((school) => {
    let html = `
        <li>
        <a
          href="#"
          onclick="selectSchool(this)"
          id="${school.split(" ")[0]}"
          class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >${school}</a
        >
      </li>
        `;

    schoolList.innerHTML += html;
  });
}

function renderCoursesAccToSearch(data) {
  const coursesList = document.getElementById("allCoursesDropDownList");
  coursesList.innerHTML = "";
  data.forEach((course) => {
    let html = `
          <li>
          <a
            href="#"
            id="${course.split(" ")[0]}__"
            onclick="addNewCourse(this)"
            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >${course}</a
          >
        </li>
          `;

    coursesList.innerHTML += html;
  });
}

function searchInSchoolList(el) {
  if (el.value === "") {
    renderSchoolsAccToSearch(dummyData);
    return;
  }

  let reg = new RegExp(el.value);
  const filteredArr = dummyData.filter(function (term) {
    if (term.match(reg)) {
      return term;
    }
  });

  renderSchoolsAccToSearch(filteredArr);
  return;
}

function searchInCoursesList(el) {
  if (el.value === "") {
    renderCoursesAccToSearch(dummyData2);
    return;
  }

  let reg = new RegExp(el.value);
  const filteredArr = dummyData2.filter(function (term) {
    if (term.match(reg)) {
      return term;
    }
  });

  renderCoursesAccToSearch(filteredArr);
  return;
}

function chooseAreaOfInterest(element) {
  localStorage.setItem("interest", element.innerHTML);
  document.getElementById("dropdownBottomButtonInterest").innerHTML = `
  ${element.innerHTML}
  <svg
    class="ml-2 w-4 h-4"
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M19 9l-7 7-7-7"
    ></path>
  </svg>
  `;

  document.getElementById("dropdownBottomInterest").classList.remove("block");
  document.getElementById("dropdownBottomInterest").classList.add("hidden");
  document.getElementById("dropdownBottomButtonInterest").click();
}

function addNewCourse(el) {
  const courseName = el.id;

  const courseObj = {
    courseName: el.innerHTML,
    courseID: el.id
  };

  console.log(courseObj);

  const courseList = JSON.parse(sessionStorage.getItem("courseList"));

  const isPresent = courseList.find((element) => {
    return element.courseID === el.id ? true : false;
  });

  if (isPresent) {
    alert("Course Already added");
    return;
  }
  if (courseList.length === 4) {
    alert("You can add only 4 courses");
    return;
  }
  sessionStorage.setItem(
    "courseList",
    JSON.stringify([...courseList, courseObj])
  );

  renderNewCourse(courseObj, courseList.length);

  document.getElementById("dropdownBottomCourses").classList.remove("block");
  document.getElementById("dropdownBottomCourses").classList.add("hidden");
  document.getElementById("dropdownBottomButtonCourses").click();
}

function renderNewCourse(courseObj, length) {
  const html = `
      <div class="inline-flex items-stretch rounded-md border bg-white" id="${courseObj.courseID}__">
      <p
        class="rounded-l-md px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-700"
      >
        ${courseObj.courseName}
      </p>
  
      <div class="relative">
        <button
          type="button"
          class="inline-flex h-full items-center justify-center rounded-r-md border-l border-gray-100 px-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700"
          onclick="deleteCourse('${courseObj.courseID}')"
          id="${courseObj.courseID} + "_"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.0"
            width="16.000000pt"
            height="16.000000pt"
            viewBox="0 0 48.000000 48.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)"
              fill="#000000"
              stroke="none"
            >
              <path
                d="M94 379 c-3 -6 22 -39 57 -75 l63 -64 -62 -63 c-49 -49 -60 -65 -50 -75 10 -10 26 1 75 50 l63 62 63 -62 c49 -49 65 -60 75 -50 10 10 -1 26 -50 75 l-62 63 64 65 c51 51 62 67 52 77 -10 10 -26 -1 -77 -52 l-65 -64 -63 62 c-66 65 -72 69 -83 51z"
              />
            </g>
          </svg>
        </button>
      </div>
    </div>
      `;

  const selectedCoursesDiv = document.getElementById("coursesSelected");
  if (length === 0) {
    selectedCoursesDiv.innerHTML = "";
  }
  selectedCoursesDiv.innerHTML += html;
}

function deleteCourse(courseId) {
  const courseList = JSON.parse(sessionStorage.getItem("courseList"));

  const updatedCourseList = courseList.filter((element) => {
    return element.courseID !== courseId ? true : false;
  });

  sessionStorage.setItem("courseList", JSON.stringify(updatedCourseList));

  const courseDiv = document.getElementById(courseId + "__");
  courseDiv.remove();
}

function submitOccupation() {
  if (JSON.parse(sessionStorage.getItem("courseList")).length === 0) {
    const selectedCoursesDiv = document.getElementById("coursesSelected");
    selectedCoursesDiv.classList.add("text-red-500");
    selectedCoursesDiv.innerHTML = "Please select atleast one course";
    return;
  }

  const selectedCoursesDiv = document.getElementById("coursesSelected");
  selectedCoursesDiv.innerHTML = "API integration pending";
}

function selectSchool(element) {
  localStorage.setItem("school", element.innerHTML);
  document.getElementById("dropdownBottomButtonSchools").innerHTML = `
  ${element.innerHTML}
  <svg
    class="ml-2 w-4 h-4"
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M19 9l-7 7-7-7"
    ></path>
  </svg>
  `;

  document.getElementById("dropdownBottom").classList.remove("block");
  document.getElementById("dropdownBottom").classList.add("hidden");
  document.getElementById("dropdownBottomButtonSchools").click();
}

function redirectHome() {
  window.location = "/";
}
