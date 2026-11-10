function generateParagraph() {
    const form = document.getElementById("myForm");

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let city = document.getElementById("city").value;
    let education = document.getElementById("education").value;
    let hobby = document.getElementById("hobby").value;

    let paragraph = `
        My name is ${name}. I am ${age} years old and I am based in ${city}.
        I have studied ${education}. My hobby is ${hobby}.`
    ;

    document.getElementById("result").innerHTML = paragraph;
}