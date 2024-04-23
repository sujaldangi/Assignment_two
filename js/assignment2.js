// array to store all the data
var employee_record = [];
// variable declaration for the input fields
var nme = age = country = language = '';
// geting the session data
var session_data = JSON.parse(sessionStorage.getItem('employee_record'));
// will run if the session data is not null to make sure table contents stay on page
if (session_data != null) {
    table = document.getElementById('tble');
    tbody = document.getElementById('tbody');
    for (i = 0; i < session_data.length; i++) {
        tr = document.createElement('tr');
        td_name = document.createElement('td');
        td_age = document.createElement('td');
        td_country = document.createElement('td');
        td_language = document.createElement('td');
        td_radio = document.createElement('td');
        td_dob = document.createElement('td');
        var text1 = document.createTextNode(session_data[i].name);
        var text2 = document.createTextNode(session_data[i].age);
        var text3 = document.createTextNode(session_data[i].country);
        var text4 = document.createTextNode(session_data[i].language);
        var text5 = document.createTextNode(session_data[i].radio);
        var text6 = document.createTextNode(session_data[i].dob);
        td_name.appendChild(text1);
        td_age.appendChild(text2);
        td_country.appendChild(text3);
        td_language.appendChild(text4);
        td_radio.appendChild(text5);
        td_dob.appendChild(text6);
        tr.appendChild(td_name);
        tr.appendChild(td_age);
        tr.appendChild(td_country);
        tr.appendChild(td_language);
        tr.appendChild(td_radio);
        tr.appendChild(td_dob);
        table.appendChild(tr);
    } 
    console.log(tr)
}
// event function that will collect the input field data
function handlechange(event) {
    if (event.target.name == "name") { nme = event.target.value };
    if (event.target.name == "age") { age = event.target.value };
    if (event.target.name == "country") { country = event.target.value };
    if (event.target.name == "language") { language = event.target.value };
}
// funtion that will be called by the submit button
function submitinfo(event) {
    // it will prevent the page from refreshing
    event.preventDefault();
    // storing the radio button and date input data into variables
    radio = document.getElementsByName('mf');
    dob = document.getElementById('dob').value;
    // variable to check if no radio button is clicked
    radio_default = 0
    // loop to check which radio button is clicked
    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            radio = radio[i].value;
            radio_default += 1;
        }
    }
    // if no radio button is selected it will set the value to empty string
    if (radio_default == 0) { radio = ''; }
    // storing the data into object
    const record = {
        "name": nme,
        "age": age,
        "country": country,
        "language": language,
        'radio': radio,
        "dob": dob,
    }
    // pushng it into list
    if (session_data == null) {
        employee_record.push(record);
    } // array methods => important 
    else if (session_data != null) {
        employee_record = [...session_data, record]; // array methods => important 
    }
    // coverting the object into string
    var employee_record_string = JSON.stringify(employee_record);
    // JSON.stringify
    // JSON.parse

    // storing the data into session storage
    sessionStorage.setItem('employee_record', employee_record_string);
    // add the latest data entered to our table
    table = document.getElementById('tble');
    tr = document.createElement('tr');
    td_name = document.createElement('td');
    td_age = document.createElement('td');
    td_country = document.createElement('td');
    td_language = document.createElement('td');
    td_radio = document.createElement('td');
    td_dob = document.createElement('td');
    var text1 = document.createTextNode(nme);
    var text2 = document.createTextNode(age);
    var text3 = document.createTextNode(country);
    var text4 = document.createTextNode(language);
    var text5 = document.createTextNode(radio);
    var text6 = document.createTextNode(dob);
    td_name.appendChild(text1);
    td_age.appendChild(text2);
    td_country.appendChild(text3);
    td_language.appendChild(text4);
    td_radio.appendChild(text5);
    td_dob.appendChild(text6);
    tr.appendChild(td_name);
    tr.appendChild(td_age);
    tr.appendChild(td_country);
    tr.appendChild(td_language);
    tr.appendChild(td_radio);
    tr.appendChild(td_dob);
    table.appendChild(tr);
    // reset the input fields
    document.getElementById('name').value = ' ';
    document.getElementById('age').value = ' ';
    document.getElementById('country').value = ' ';
    document.getElementById('lang').value = ' ';
    document.getElementById('m').checked = false;
    document.getElementById('f').checked = false;
    document.getElementById('dob').valueAsDate = null;
    // reseting the variable values
    nme = '';
    age = '';
    country = '';
    language = '';
}
