document.addEventListener("DOMContentLoaded", function () {
  var feed = new Instafeed({
    accessToken: "TON_ACCESS_TOKEN", // Remplace par ton access token
    target: "instagram-feed", // Le conteneur où les images seront affichées
    resolution: "standard_resolution", // La résolution des images
    template: '<img src="{{image}}" class="carousel-item" />', // Modèle pour chaque image
    limit: 10, // Nombre d'images à afficher
  });
  feed.run();
});
