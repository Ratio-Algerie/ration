function sendMail(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupérer le formulaire
    const form = document.getElementById("contact-form");

    // Vérifiez si le formulaire est valide
    if (!form.checkValidity()) {
        alert("Veuillez remplir tous les champs requis correctement.");
        return false; // Ne pas envoyer le formulaire
    }

    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        order: document.getElementById("order").value
    };

    emailjs.send("service_pmqlbxu", "template_wnzhdcv", parms)
        .then(function (res) {
            alert("Success! Your message has been sent. Status: " + res.status);
            form.reset(); // Réinitialise le formulaire après succès
        })
        .catch(function (err) {
            alert("Failed to send email. Please try again later. Error: " + err);
        });
}
