function validateName() {
    var name = document.getElementById("contact-name").value;
    if (name.length == 0) {
        nameError.innerHTML = 'Name is requried';
        return false;
    }
    if (!name.match(/^[A-Za-z]*/s, { 1:  }[A - Za] * $)) {
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
