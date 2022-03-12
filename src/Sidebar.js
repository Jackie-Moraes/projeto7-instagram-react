export default function Sidebar() {
    const sugestoes = [
        {
            imagem: "imagens/badvibes.jfif",
            nick: "bad.vibes.memes",
            info: "Segue você",
        },
        {
            imagem: "imagens/chibird.jpg",
            nick: "chibirdart",
            info: "Segue você",
        },
        {
            imagem: "imagens/razoes.jpg",
            nick: "razoesparaacreditar",
            info: "Novo no Instagram",
        },
        {
            imagem: "imagens/adorable.jpg",
            nick: "adorable_animals",
            info: "Segue você",
        },
        {
            imagem: "imagens/smallcute.jpg",
            nick: "smallcutecats",
            info: "Segue você",
        },
    ]

    return (
        <section class="sidebar">
            <div class="sideProfile">
                <Usuario imagem="imagens/catana.png" nick="catanacomics" nome="Catana" />

                <div class="suggest">
                    <div class="suggestHead">
                        <p>Sugestões para você</p>
                        <p class="infoPrin">Ver Tudo</p>
                    </div>

                    {
                        sugestoes.map(sugestao => <Sugestoes imagem={sugestao.imagem} nick={sugestao.nick} info={sugestao.info}/>)
                    }

                    <div class="disclaimer">
                        <p>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags •  Idioma</p>
                        <p>© 2021 INSTAGRAM DO FACEBOOK</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Usuario(props) {
    const {imagem, nick, nome} = props;

    return (
        <div class="personal">
            <img src={imagem} />

            <div class="info">
                <p class="infoPrin">{nick}</p>
                <p class="infoSec">{nome}</p>
            </div>

        </div>
    );
}

function Sugestoes(props) {
    const {imagem, nick, info} = props;

    return (
        <div class="list">
            <img src={imagem} />

            <div class="infoSuggest">
                <p class="infoPrin">{nick}</p>
                <p class="infoSec">{info}</p>
            </div>

            <div class="infoSuggestFollow">
                <p>Seguir</p>
            </div>
        </div>
    );
}