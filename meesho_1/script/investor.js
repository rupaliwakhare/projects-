function playFirstVideo(name) {
  const videoMap = {
    "Sanju Sharma": "/investor-web/_next/videos/home_tile_1_video_1.mp4",
    Yashwanth: "/investor-web/_next/videos/home_tile_1_video_2.mp4",
  };

  const videoUrl = videoMap[name];
  if (!videoUrl) return;

  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    if (card.getAttribute("data-name") === name) {
      card.innerHTML = `
        <video width="100%" height="100%" controls autoplay>
          <source src="${videoUrl}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      `;
    }
  });
}
