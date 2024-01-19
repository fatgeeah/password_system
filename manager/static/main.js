// display on click
const modalWrapper = document.querySelector(".modals-wrapper");
if (modalWrapper) {
    function displayModal(id) {
        const modal = document.getElementById(id);
        modalWrapper.style.display = "flex";
        modal.style.display = "flex";

        // close
        const close = document.getElementById("close-modal");
        close.addEventListener("click", () => {
            modalWrapper.style.display = "none";
            modal.style.display = "none";
        });
    }
}

const copies = document.querySelectorAll(".copy");
copies.forEach((copy) => {
    copy.onclick = () => {
        let elementToCopy = copy.previousElementSibling;
        elementToCopy.select();
        document.execCommand("copy");
    };
});

const actions = document.querySelectorAll(".actions");
if (actions) {
    actions.forEach((action) => {
        action.addEventListener("click", () => {
            const links = action.querySelectorAll("a");
            links.forEach((link) => {
                link.style.display = "flex";
            });

            // Hide the links after 3 seconds
            setTimeout(function () {
                links.forEach((link) => {
                    link.style.display = "none";
                });
            }, 3000);
        });
    });
}
function confirmDelete(passwordId) {
    var confirmation = confirm("Are you sure you want to delete this password?");
    if (confirmation) {
        document.getElementById('delete-btn' + passwordId).click();
    }
}