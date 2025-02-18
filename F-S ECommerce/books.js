let books;

async function renderBooks(filter) {
  const booksWrapper = document.querySelector(".books");

  booksWrapper.classList += ' books__loading'

  if (!books) {
    books = await getBooks();
  }
  
  booksWrapper.classList.remove('books__loading')

  if (filter === "LOW_TO_HIGH") {
    books.sort(
      (a, b) =>
        (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice)
    );
  } else if (filter === "HIGH_TO_LOW") {
    books.sort(
      (a, b) =>
        (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice)
    );
  } else if (filter === "RATING") {
    books.sort((a, b) => b.rating - a.rating);
  }

  const booksHtml = books
    .map((book) => {
      return `<div class="book">
    <figure class="book__img--wrapper">
      <img class="book__img" src="${book.url}" alt="">
    </figure>
    <div class="book__title">
      ${book.title}
    </div>
    <div class="book__ratings">
      ${ratingsHTML(book.rating)}
    </div>
    <div class="book__price">
      ${priceHTML(book.originalPrice, book.salePrice)}
    </div>
  </div>`;
    })
    .join("");

  booksWrapper.innerHTML = booksHtml;
}

function priceHTML(originalPrice, salePrice) {
  if (!salePrice) {
    return `$${originalPrice.toFixed(2)}`;
  }
  return `<span class="book__price--normal">$${originalPrice.toFixed(
    2
  )}</span>$${salePrice.toFixed(2)}`;
}

function ratingsHTML(rating) {
  let ratingHTML = "";
  for (let i = 0; i < Math.floor(rating); ++i) {
    ratingHTML += '<i class="fas fa-star"></i>\n';
  }
  if (!Number.isInteger(rating)) {
    ratingHTML += '<i class="fas fa-star-half-alt"></i>\n';
  }
  return ratingHTML;
}

function filterBooks(event) {
  renderBooks(event.target.value);
}

setTimeout(() => {
  renderBooks();
});

// Book sort DATA
function getBooks() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: "Crack the Coding Interview",
          url: "assets/crack the coding interview.png",
          originalPrice: 14.95,
          salePrice: 6.95,
          rating: 4.5,
        },
        {
          id: 2,
          title: "Atomic Habits",
          url: "assets/atomic habits.jpg",
          originalPrice: 25.95,
          salePrice: 14.95,
          rating: 4.5,
        },
        {
          id: 3,
          title: "Distilled computer sci",
          url: "assets/Screenshot_117.jpg",
          originalPrice: 20.95,
          salePrice: 14.95,
          rating: 5,
        },
        {
          id: 4,
          title: "Self-taught programmer",
          url: "assets/Screenshot_118.jpg",
          originalPrice: 21.95,
          salePrice: 12.95,
          rating: 4.5,
        },
        {
          id: 5,
          title: "PHP and MYSQL",
          url: "assets/book1.jpg",
          originalPrice: 25.95,
          salePrice: 14.95,
          rating: 4.5,
        },
        {
          id: 6,
          title: "Operating System",
          url: "assets/book3.jpg",
          originalPrice: 22.95,
          salePrice: 14.95,
          rating: 4.5,
        },
        {
          id: 7,
          title: "Can't Hurt Me",
          url: "assets/david goggins.jpeg",
          originalPrice: 29.95,
          salePrice: 10.95,
          rating: 4.5,
        },
        {
          id: 8,
          title: "Deep Work",
          url: "assets/deep work.jpeg",
          originalPrice: 22.95,
          salePrice: 9.95,
          rating: 4.5,
        },
        {
          id: 9,
          title: "Fluent Python",
          url: "assets/New_/fluent python.png",
          originalPrice: 23.95,
          salePrice: 10.95,
          rating: 4.5,
        },
        {
          id: 10,
          title: "Pro MERN Stack Development",
          url: "assets/New_/pro MERN.png",
          originalPrice: 25.95,
          salePrice: 13.95,
          rating: 4.5,
        },
        {
          id: 11,
          title: "J.Doe Who's There?",
          url: "assets/New_/book1.jpg",
          originalPrice: 27.95,
          salePrice: 17.95,
          rating: 4.5,
        },
        // Latest Books
        {
          id: 12,
          title: "The 10X Rule",
          url: "assets/book-1.jpeg",
          originalPrice: 25.85,
          salePrice: 12.00,
          rating: 4.5,
        },
        {
          id: 13,
          title: "Be Obsessed Or Be Average",
          url: "assets/book-2.jpeg",
          originalPrice: 49.95,
          salePrice: 15.95,
          rating: 4.5,
        },
        {
          id: 14,
          title: "Rich Dad Poor Dad",
          url: "assets/book-3.jpeg",
          originalPrice: 35.95,
          salePrice: 14.75,
          rating: 4.5,
        },
        {
          id: 15,
          title: "Cashflow Quadrant",
          url: "assets/book-4.jpeg",
          originalPrice: 27.00,
          salePrice: 11.99,
          rating: 4.5,
        },
        {
          id: 16,
          title: "48 Laws of Power",
          url: "assets/book-5.jpeg",
          originalPrice: 69.95,
          salePrice: 19.95,
          rating: 4.5,
        },
        {
          id: 17,
          title: "The Subtle art of not giving a f*ck",
          url: "assets/New_/subtle art.png",
          originalPrice: 40.95,
          salePrice: 17.95,
          rating: 4.5,
        },
        {
          id: 18,
          title: "The art of creative thinking",
          url: "assets/New_/art of creative thinking.png",
          originalPrice: 35.95,
          salePrice: 14.95,
          rating: 4.5,
        },
        {
          id: 19,
          title: "The Psychology of Money",
          url: "assets/New_/psychology of money.png",
          originalPrice: 50.95,
          salePrice: 19.95,
          rating: 4.5,
        },
        {
          id: 20,
          title: "The power of now",
          url: "assets/New_/power ofnow.png",
          originalPrice: 25.95,
          salePrice: 11.95,
          rating: 4.5,
        },
        {
          id: 21,
          title: "Thinking in bets",
          url: "assets/New_/thinking in bets.png",
          originalPrice: 35.95,
          salePrice: 17.95,
          rating: 4.5,
        },
        {
          id: 22,
          title: "Dopamine Detox",
          url: "assets/New_/dopamine detox.png",
          originalPrice: 35.95,
          salePrice: 10.95,
          rating: 4.5,
        },
        {
          id: 23,
          title: "The 5 Second Rule",
          url: "assets/book-6.jpeg",
          originalPrice: 35.95,
          salePrice: 10.95,
          rating: 4.5,
        },
        {
          id: 24,
          title: "The Art of clean Code",
          url: "assets/New_/art  of clean code.png",
          originalPrice: 29.95,
          salePrice: 15.00,
          rating: 4.5,
        },
        {
          id: 25,
          title: "Begining Node.js,Express & MongoDB Development",
          url: "assets/New_/begining MERN.png",
          originalPrice: 22.95,
          salePrice: 12.00,
          rating: 4.5,
        },
        {
          id: 26,
          title: "Eloquent JavaScript",
          url: "assets/New_/Elloquent JS.png",
          originalPrice: 27.95,
          salePrice: 16.00,
          rating: 4.5,
        },
        {
          id: 27,
          title: "Learn React Native Library",
          url: "assets/New_/react.png",
          originalPrice: 29.95,
          salePrice: 14.00,
          rating: 4.5,
        },
        {
          id: 28,
          title: "Your Next Five Moves",
          url: "assets/book-7.jpg",
          originalPrice: 29.95,
          salePrice: 14.00,
          rating: 4.5,
        },
        {
          id: 29,
          title: "Mastery",
          url: "assets/book-8.jpeg",
          originalPrice: 27.95,
          salePrice: 11.00,
          rating: 4.5,
        }
      ]
      );
    }, 1000);
  });
}


