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
      btn1.classList.add("btn", "btn-danger", "mt-4");
      btn1.innerText = "cancel";
      btn1.addEventListener("click", () => {
        row.removeChild(card);
      });

      const card = document.createElement("div");
      card.classList.add("card", "col-sm-4", "col-md-3", "gy-3", "gx-3", "h-100");
      row.appendChild(card);
      const col = document.ge;
      card.style.maxWidth = "20%";

      const titolo = document.createElement("p");
      titolo.innerText = book.title;

      const img = document.createElement("img");
      img.src = book.img;
      card.appendChild(img);
      card.appendChild(titolo);
      img.style = " height:300px;  object-fit: cover";
      card.appendChild(btn1);
    });
  })
  .catch((error) => {
    console.error("Errore durante il recupero dei dati:", error);
  });
