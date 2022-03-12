import Stories from "./Stories";
import PostVideo from "./PostVideo";

export default function Posts() {
    const posts = [
        {
            nome: "barked",
            perfil: "imagens/barked.png",
            imagem: "imagens/dog.jpg",
            imagemCurtido: "imagens/adorable.jpg",
            curtidoNome: "adorable_animals",
            nomeComment: "zeptun_ix",
            comment: "He looks just my dog, Spark!"
        },
        {
            nome: "meowed",
            perfil: "imagens/meowed.png",
            imagem: "imagens/cat2.jpg",
            imagemCurtido: "imagens/responde.png",
            curtidoNome: "respondeai",
            nomeComment: "im_stoic",
            comment: "That cat's eyes are so ensnaring, like he's staring into my soul."
        },
    ];

    return (
        <section class="postagens">
            <Stories />
            <PostVideo />
            {
                posts.map(post => <Post nome={post.nome} imagemPerfil={post.perfil} imagemPost={post.imagem} imagemCurtido={post.imagemCurtido} curtidoNome={post.curtidoNome} nomeComment={post.nomeComment} comment={post.comment}/>)
            }
        </section>
    );
}

function Post(props) {
    const {imagemPerfil, nome, imagemPost, imagemCurtido, curtidoNome, nomeComment, comment} = props;
    
    return (
        <div class="post">
            <div class="postHeader">
                <div class="top">
                    <img src={imagemPerfil}/>
                    <p>{nome}</p>
                </div>
                <img class="pontinhos" src="imagens/ellipsis-horizontal-outline.svg"/>
            </div>

            <img src={imagemPost} />

            <div class="iconPost">
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>

            <div class="desc">
                <img src={imagemCurtido} />
                <p>Curtido por <strong>{curtidoNome}</strong> e <strong>outras 99.159 pessoas</strong></p>
            </div>

            <div class="commentSection">
                <div class="comments">
                    <p class="infoPrin">{nomeComment}</p>
                    <p class="comment">{comment}</p>
                </div>

                <ion-icon name="heart-outline"></ion-icon>
            </div>

            <div class="commentInput">
                <ion-icon name="happy-outline"></ion-icon>
                <input type="text" placeholder="Adicione um comentário..." />
                <button>Publicar</button>
            </div>
        </div>
    )
}