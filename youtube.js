setInterval(() => {
  for (const button of document.getElementsByClassName("ytp-ad-skip-button")) {
    button.click(); // Botões "Ignorar anúncio" ou "Ignorar anúncios"
  }
}, 300);
