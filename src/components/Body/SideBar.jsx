import User from "./User";

export default function Sidebar() {
  const imgSrc = [
    { name: "bad.vibes.memes", src: "assets/img/bad.vibes.memes.svg" },
    { name: "chibirdart", src: "assets/img/chibirdart.svg" },
    { name: "razoesparaacreditar", src: "assets/img/razoesparaacreditar.svg" },
    { name: "adorable_animals", src: "assets/img/adorable_animals.svg" },
    { name: "smallcutecats", src: "assets/img/smallcutecats.svg" },
  ];

  return (
    <>
      <User
        userName="Catana"
        src="assets/img/catanacomics.svg"
        userNick="catanacomics"
      />
      <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>

        {imgSrc.map((e) => {
          return (
            <div class="sugestao">
              <div class="usuario">
                <img alt="" src={e.src} />
                <div class="texto">
                  <div class="nome">{e.name}</div>
                  <div class="razao">Segue você</div>
                </div>
              </div>

              <div class="seguir">Seguir</div>
            </div>
          );
        })}
      </div>

      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </>
  );
}
