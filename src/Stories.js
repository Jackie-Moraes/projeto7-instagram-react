export default function Stories() {
    const stories = [
        {
            nome: "9gag",
            imagem: "imagens/9gag_logo.png"
        },
        {
            nome: "meowed",
            imagem: "imagens/meowed.png"
        },
        {
            nome: "barked",
            imagem: "imagens/barked.png"
        },
        {
            nome: "natthanwpyle",
            imagem:  "imagens/nathanw.png"
        },
        {
            nome: "wawawiwa",
            imagem: "imagens/wawa.png"
        },
        {
            nome: "respondeai",
            imagem: "imagens/responde.png"
        },
        {
            nome: "filomoderna",
            imagem: "imagens/filomo.jfif"
        },
        {
            nome: "BTS",
            imagem: "imagens/bts.jpg"
        }
    ]

    return (
        <div class="stories">
            <ion-icon name="chevron-forward-circle"></ion-icon>
            {
                stories.map(story => <StoriesUser imagem={story.imagem} nome={story.nome}/>)
            }
            
        </div>
    );
}

function StoriesUser(props) {
    const {imagem, nome} = props;

    return (
        <div class="storiesTitle">
            <img src={imagem} alt={nome} />
            <p class="caption">{nome}</p>
        </div>
    )
}