document.addEventListener("DOMContentLoaded", function() {
    const books = document.querySelectorAll(".b1");
    // const bookDetails = document.querySelector(".book-details");

    books.forEach(function(book) {
        book.addEventListener("click", function() {
            // Reset previously selected book styles
            books.forEach(function(b) {
                b.classList.remove("selected");
            });

            // Highlight the selected book
            this.classList.add("selected");

            // Update book details
            // const title = this.querySelector("h3").innerText;
            // const category = this.querySelector(".category").innerText;
            // const author = this.querySelector(".author").innerText;

            // document.getElementById("selected-book-title").innerText = title;
            // document.getElementById("selected-book-category").innerText = category;
            // document.getElementById("selected-book-author").innerText = author;
        });
    });
});
