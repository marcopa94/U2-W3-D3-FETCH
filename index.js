let libriagg = [];
fetch("https://striveschool-api.herokuapp.com/books")
  .then((response) => {
    console.log(fetch);
    console.log(response);
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("ERRORE NEL REPERIMENTO DATI");
    }
  })

  .then((books) => {
    // DOM Manipulation è da fare qui dentro!
    const row = document.getElementsByClassName("row")[0];
    books.forEach((book) => {
      /*    console.log(book.title); */
      const btn1 = document.createElement("button");
      const btn2 = document.createElement("button");
      btn1.classList.add("btn", "btn-danger", "mt-4");
      btn2.classList.add("btn", "btn-success", "mt-4");
      btn1.innerText = "cancel";
      btn2.innerText = "Aggiungi carrello";
      btn1.addEventListener("click", () => {
        row.removeChild(card);
      });
      btn2.addEventListener("click", () => {
        libriagg.push(book.title);
        localStorage.setItem(book.title, JSON.stringify(book.price));
      });

      const card = document.createElement("div");
      /*   const col = document.createElement("div"); */
      card.classList.add("card", "col-sm-4", "col-md-3", "gy-3", "gx-3");
      row.appendChild(card);
      card.style = "height:35rem";
      const titolo = document.createElement("p");

      titolo.innerText = book.title;
      const p3 = document.createElement("p");
      p3.innerText = book.price;
      const img = document.createElement("img");
      img.src = book.img;
      card.appendChild(img);
      console.log(book.img);
      card.appendChild(titolo);
      card.appendChild(p3);
      img.style = " height:300px;  object-fit: cover";
      card.appendChild(btn2);
      card.appendChild(btn1);
    });
  })
  .catch((error) => {
    console.error("Errore durante il recupero dei dati:", error);
  });
