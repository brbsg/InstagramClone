export default function Posts() {
  const imgSrc = [
    {
      name: "meowed",
      src1: "assets/img/meowed.svg",
      src2: "assets/img/gato-telefone.svg",
    },
    {
      name: "barked",
      src1: "assets/img/barked.svg",
      src2: "assets/img/dog.svg",
    },
  ];
  return (
    <div class="posts">
      {imgSrc.map((e) => {
        return (
          <div class="post">
            <div class="topo">
              <div class="usuario">
                <img alt="" src={e.src1} />
                {e.name}
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div class="conteudo">
              <img alt="" src={e.src2} />
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>
              </div>

              <div class="curtidas">
                <img alt="" src="assets/img/respondeai.svg" />
                <div class="texto">
                  Curtido por <strong>respondeai</strong> e
                  <strong>outras 101.523 pessoas</strong>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
