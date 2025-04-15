document.querySelectorAll(".dropbtn").forEach((button) => {
  button.addEventListener("click", function (event) {
    event.stopPropagation();
    const btnId = this.getAttribute("data-buttonid");
    const dropdown = document.getElementById(btnId);

    document.querySelectorAll('.dropdown-content').forEach(menu => {
        if (menu !== dropdown) d.classList.remove('show');
    });

    dropdown.classList.toggle('show');

    window.addEventListener('click', function() {
        this.document.querySelectorAll('.dropdown-content').forEach(menu => {
            menu.classList.remove('show');
        })
    })
  });
});

