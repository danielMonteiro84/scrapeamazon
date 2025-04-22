document.getElementById("scrapeButton").addEventListener("click", async () => {
  const keyword = document.getElementById("keyword").value.trim();
  const resultDiv = document.getElementById("results");
  resultDiv.innerHTML = ";";

  if (!keyword) {
    alert("Por favor, insira um termo de busca!");
    return;
  }

  try {
    const response = await fetch(
      `http://localhost:3000/api/scrape?keyword=${keyword}`
    );

    const data = await response.json();
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    if (data.length === 0) {
      resultsDiv.innerHTML = "Nenhum produto encontrado!";
    } else {
      data.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.title}" />
            <h3>${product.title}</h3>
            <p>Avaliação: ${product.rating}</p>
            <p>Reviews: ${product.reviews}</p>
          `;
        resultsDiv.appendChild(productDiv);
      });
    }
  } catch (error) {
    alert("Erro ao buscar produtos.");
  }
});
