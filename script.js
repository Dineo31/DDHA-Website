const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const employerForm = document.getElementById('employerForm');

if (employerForm) {
  employerForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Your agency's receiving email address
    const agencyEmail = 'lineoramonyaluoe31@gmail.com';

    // Email subject
    const subject = 'New Employer Registration - DDHA';

    // Collect every answer from the form
    const formData = new FormData(employerForm);
    const answers = [];

    for (const [name, value] of formData.entries()) {
      answers.push(name + ': ' + (value || 'Not provided'));
    }

    // Create the email body
    const body =
      'NEW EMPLOYER REGISTRATION\n' +
      'Dineo Domestic Helper Agency\n\n' +
      answers.join('\n') +
      '\n\nSent via the DDHA website.';

    // Open the device's configured email application
    const mailtoLink =
      'mailto:' + agencyEmail +
      '?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(body);

    window.location.href = mailtoLink;
  });
}