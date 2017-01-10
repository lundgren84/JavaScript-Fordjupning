var errorDiv = document.getElementById('errorDiv')
var resulttxt = document.getElementById('resulttxt')
var resultDiv = document.getElementById('resultDiv')
var btnSave = document.getElementById('btnSave')
var userDb = document.getElementById('userDb')
var autoFillbtn = document.getElementById('autoFillbtn')
var Persons = []




function SubmitForm() {
    errorDiv.className = 'hide'
    resultDiv.className = 'hide'
    autoFillbtn.className = 'hide'
    var userName = document.getElementById('Username').value
    var firstName = document.getElementById('Firstname').value
    var lastName = document.getElementById('Lastname').value
    var phone = document.getElementById('Phone').value
    var city = document.getElementById('City').value
    var age = document.getElementById('Age').value

    if (isNaN(age)) {
        errorDiv.className = ''
    }
    else {
        var result = ""
        resultDiv.className = ''
        result += 'UserName: ' + userName +
                  ' - FirstName: ' + firstName +
                  ' - LastName: ' + lastName +
                  ' - Phonenumber: ' + phone +
                  ' - City: ' + city +
                  ' - Age: ' + age;

        resulttxt.innerHTML = result
    }

}
function SaveUser() {
    var userName = document.getElementById('Username')
    var firstName = document.getElementById('Firstname')
    var lastName = document.getElementById('Lastname')
    var phone = document.getElementById('Phone')
    var city = document.getElementById('City')
    var age = document.getElementById('Age')

    var person = { UserName: userName.value, FirstName: firstName.value, LastName: lastName.value, Phone: phone.value, City: city.value, Age: age.value }
    Persons.push(person)
    userDb.innerHTML = Persons.length

    errorDiv.className = 'hide'
    resultDiv.className = 'hide'
    userName.value = "";
    firstName.value = "";
    lastName.value = "";
    phone.value = "";
    city.value = "";
    age.value = "";

}
function CheckAutofill() {
    var userName = document.getElementById('Username')
  
    
    for (var i = 0; i < Persons.length; i++) {
        if (Persons[i].UserName == userName.value) {
            autoFillbtn.className = ''
        }
    }
}
function Autofill() {
    autoFillbtn.className = 'hide'
    var userName = document.getElementById('Username')
    for (var i = 0; i < Persons.length; i++) {
        if (Persons[i].UserName == userName.value) {
            document.getElementById('Username').value = Persons[i].UserName
            document.getElementById('Firstname').value = Persons[i].FirstName
            document.getElementById('Lastname').value = Persons[i].LastName
            document.getElementById('Phone').value = Persons[i].Phone
            document.getElementById('City').value = Persons[i].City
            document.getElementById('Age').value = Persons[i].Age
            break;
        }
    }
  
}