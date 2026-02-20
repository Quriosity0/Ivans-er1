const AllForms = document.forms;
regForm = AllForms.usr;

console.log(regForm.age);

regForm.addEventListener('submit', (event) => {
    event.preventDefault;
    console.log(regForm.name.value);
    console.log(regForm.age.value);
    console.log(regForm.pwd.value);
    regForm.reset();
});