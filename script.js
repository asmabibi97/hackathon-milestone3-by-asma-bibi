// // listing element
// document.getElementById('resumeform')?.addEventListener('submit' ,function(event)
// {
//     event.preventDefault();
var _a;
// //type assertion
// const nameElement=document.getElementById('name') as HTMLInputElement;
// const emailElement=document.getElementById('email') as HTMLInputElement;
// const phoneElement=document.getElementById('phone') as  HTMLInputElement;
// const educationElement=document.getElementById('education') as  HTMLInputElement;
// const experienceElement=document.getElementById('experience') as  HTMLInputElement;
// const skillsElement=document.getElementById('skills') as  HTMLInputElement;
// if(nameElement && emailElement&& educationElement && skillsElement){
//     const name=nameElement.value
// const email=emailElement.value;
// const phone=phoneElement.value;
// const education=educationElement.value;
// const experience=experienceElement.value;
// const skills=skillsElement.value;
// //create output 
// const resumeOutput=`
// <h2>Resume</h2>
// <p><strong>Name:</strong> ${name}</p>;
// <p><strong>Email:</strong> ${email}</p>
// <p><strong>phone:</strong> ${phone}</p>
// <h3>Education</h3>
// <p>${education}</p>
// <h3>Ecperience></h3>
// <p>${experience}</p>
// <h3>Skills></h3>
// <p>${skills}</p>
// `;
// const resumeOutputElement = document.getElementById('resumeOutput')
// if (resumeOutputElement){
//     resumeOutputElement.innerHTML = resumeOutput
// } else{
//     console.error(`the resume output element are missing`)
// }
// } else{
//     console.error(`one or more output elemnt are missing`)
// }
// }
// )
//gpt version 
// Listening to the form submission
(_a = document.getElementById('resumeform')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Type assertion (use HTMLTextAreaElement for textarea elements)
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education'); // Correct type for textarea
    var experienceElement = document.getElementById('experience'); // Correct type for textarea
    var skillsElement = document.getElementById('skills'); // Correct type for textarea
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // Create resume output
        var resumeOutput = "\n            <h2>Resume</h2>\n            <p><strong>Name:</strong> ".concat(name_1, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n            <h3>Experience</h3>\n            <p>").concat(experience, "</p>\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n        ");
        // Display the resume output in the div with ID 'resumeoutput'
        var resumeOutputElement = document.getElementById('resumeoutput'); // Correct ID here
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error("The resume output element is missing.");
        }
    }
    else {
        console.error("One or more form elements are missing.");
    }
});
