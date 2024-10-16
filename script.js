function submitForm() {
   
    // Get form data
    var form = document.getElementById('userForm');
    var mat = form.querySelector('#mat').value;
    var np = form.querySelector('#np').value;
    var tel = form.querySelector('#tel').value;
    var ligne = form.querySelector('#ligne').value;
    var chef = form.querySelector('#chef').value;
    var date = form.querySelector('#date').value;
    var nbjours = form.querySelector('#nbjours').value;
    var type = form.querySelector('#type').value;

    // Create user object
    var user = {
        matricule: mat,
        nom_prenom: np,
        tel: tel,
        ligne: ligne,
        chef: chef,
        date_demande: date,
        nb_jours_conge: nbjours,
        type_conge: type
    };

    // Save to local storage
    var users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    // Send SMS notification
    sendSMS(tel, `Your leave request has been submitted. Date: ${date}, Type: ${type}`);
    // Navigate to the users list page
    window.location.href = 'use.html';
}
