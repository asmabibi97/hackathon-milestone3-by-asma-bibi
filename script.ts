

// Listening to the form submission
document.getElementById('resumeform')?.addEventListener('submit', function (event) {
    event.preventDefault();

    // Type assertion (use HTMLTextAreaElement for textarea elements)
    const profilepictureInput = document.getElementById('profilepicture') as HTMLInputElement;
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement;  // Correct type for textarea
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement; // Correct type for textarea
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;         // Correct type for textarea

    if (profilepictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;
 //Profile picture handling
 const profilepictureFile = profilepictureInput.files?.[0];
 const profilepictureURL = profilepictureFile ? URL.createObjectURL(profilepictureFile) : '';
        // Create resume output
        const resumeOutput = `
            <h2>Resume</h2>
             ${profilepictureURL ? `<img src="${profilepictureURL}" alt="profile picture" class="profilepicture">` : ''}
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Experience</h3>
            <p>${experience}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
        `;

        // Display the resume output in the div with ID 'resumeoutput'
        const resumeOutputElement = document.getElementById('resumeoutput');  // Correct ID here
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        } else {
            console.error(`The resume output element is missing.`);
        }
    } else {
        console.error(`One or more form elements are missing.`);
    }
});













