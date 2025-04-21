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


let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n)
}

function showSlides(n) {
  const allSlides = document.getElementsByClassName("pictureSlides");
  const numberOfSlides = allSlides.length;
  for (i = 0; i < numberOfSlides; i++) {
    const slides = document.getElementById(`pic${i}`);
    slides.style.display = "none";
    if (i === n) {
      slides.style.display = "flex";
    }
    if (slideIndex > numberOfSlides -1 || slideIndex < 0) {
      slideIndex = 0;
      showSlides(slideIndex);
    }
    console.log(slideIndex);
}
}

setInterval(() => plusSlides(1), 5000);