(function() {
    emailjs.init("JwfP0SI5P7ah_H_sT");
})();

const formMail = document.querySelector("#formMail")

formMail.addEventListener('submit', e => {
    e.preventDefault()
    let fullname = document.querySelector('#fullname').value
    let userEmail = document.querySelector('#mail').value
    let subjectMail = document.querySelector('#subject').value
    let userMessage = document.querySelector('#message').value

    if (fullname.value == null && userEmail.value == null &&
        subjectMail.value == null & userMessage.value == null) {
        alert("Input required")
        return
    }

    const contactParams = {
        from_name: fullname,
        from_mail: userEmail,
        subject: subjectMail,
        message: userMessage,
    }

    emailjs.send('service_5ij832g', 'template_kc9qkte', contactParams)
        .then(function(res) {
            console.log('success', res.status, res.text)
        }).catch((err) => {
            console.log('failed', err)
        })

})