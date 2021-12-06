export default function Stories() {
  const imgSrc = [
    { name: "9gag", src: "assets/img/9gag.svg" },
    { name: "meowed", src: "assets/img/meowed.svg" },
    { name: "barked", src: "assets/img/barked.svg" },
    {
      name: "nathanwpylestrangeplanet",
      src: "assets/img/nathanwpylestrangeplanet.svg",
    },
    { name: "wawawicomics", src: "assets/img/wawawicomics.svg" },
    { name: "respondeai", src: "assets/img/respondeai.svg" },
    { name: "filomoderna", src: "assets/img/filomoderna.svg" },
    { name: "memeriagourmet", src: "assets/img/memeriagourmet.svg" },
  ];

  return (
    <div class="stories">
      {imgSrc.map((e) => {
        return (
          <div class="story">
            <div class="imagem">
              <img alt="" src={e.src} />
            </div>
            <div class="usuario">{e.name}</div>
          </div>
        );
      })}

      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}
