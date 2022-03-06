(function() {
    emailjs.init("JwfP0SI5P7ah_H_sT");
})();

const formMail = document.querySelector("#formMail")

formMail.addEventListener('submit', e => {
    e.preventDefault()

    const fullname = document.querySelector('#fullname').value
    const userEmail = document.querySelector('#mail').value
    const subjectMail = document.querySelector('#subject').value
    const userMessage = document.querySelector('#message').value

    if (fullname == null || fullname === '' && userEmail == null || userEmail === '' &&
        subjectMail == null || subjectMail === '' && userMessage == null || userMessage === '') {
        return alert('Error!')
    } else {
        const contactParams = {
            from_name: fullname,
            from_mail: userEmail,
            subject: subjectMail,
            message: userMessage,
        }

        emailjs.send('service_5ij832g', 'template_kc9qkte', contactParams)
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
