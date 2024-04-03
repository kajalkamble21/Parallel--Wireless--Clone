<script>
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".dropdown-toggle").forEach(function (element) {
      element.addEventListener("click", function (e) {
        e.preventDefault();
        const dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
        } else {
          dropdownContent.style.display = "block";
        }
      });
    });

    document.querySelectorAll(".dropdown-content .sub-dropdown a").forEach(function (
      element
    ) {
      element.addEventListener("click", function (e) {
        e.preventDefault();
        const dropdownContent = this.parentElement;
        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
        }
      });
    });
  });
</script>