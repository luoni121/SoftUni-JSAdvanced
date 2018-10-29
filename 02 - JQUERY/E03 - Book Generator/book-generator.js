function createBook(selector, title, author, isbn) {
    (function bookGenerator() {
        let id = 1;
        return function () {

            let container = $(selector);

            let selectBtn = $("<button>Select</button>");
            let deselectBtn = $("<button>Deselect</button>");

           let fragment = $("<div></div>")
                .attr('id', `'book' + ${id++}`);

            $("<p></p>")
                .addClass('title')
                .text(title)
                .appendTo(fragment);

            $("<p></p>")
                .addClass('author')
                .text(author)
                .appendTo(fragment);

            $("<p></p>")
                .addClass('isbn')
                .text(isbn)
                .appendTo(fragment);
         
            selectBtn.on("click", function () {
                fragment.css("border", "solid blue 2px")
            });

            deselectBtn.on("click", function () {
                fragment.css("border", "none");
            });

            selectBtn.appendTo(fragment);
            deselectBtn.appendTo(fragment);

            container.append(fragment);
        }
    })()()
};
