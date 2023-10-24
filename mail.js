(function() {
    emailjs.init("h7g8644w2bHhmPT_Egiq-);
})();

const formMail = document.querySelector("#formMail")
const formTitle = document.querySelector(".form-title")

formMail.addEventListener('submit', e => {
    e.preventDefault()

    const fullname = document.querySelector('#fullname').value
    const userEmail = document.querySelector('#mail').value
    const subjectMail = document.querySelector('#subject').value
    const userMessage = document.querySelector('#message').value

    function message(msg) {
        return `${msg}`
    }

    const formTitle = document.querySelector('.form-title');
    if (!fullname || !userEmail || !subjectMail || !userMessage) {
        formTitle.textContent = message('Input is required!');
        return;
    } else {
        const contactParams = {
            from_name: fullname,
            from_mail: userEmail,
            subject: subjectMail,
            message: userMessage,
        }

        emailjs.send('service_6v88ywc', 'template_xy03tyj', contactParams)
            .then(res => {
                setTimeout(() => {
                    alert('success', res.status, res.text)
                }, 3000)

            }).catch(err => {
                setTimeout(() => {
                    alert('error!', err.message)
                }, 3000)
            })
    }

})
