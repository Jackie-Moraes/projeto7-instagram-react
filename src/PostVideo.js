export default function PostVideo() {
    return (
        <div class="post">
            <div class="postHeader">
                <div class="top">
                    <img src="imagens/meowed.png"/>
                    <p>Meowed</p>
                </div>
                <img class="pontinhos" src="imagens/ellipsis-horizontal-outline.svg"/>
            </div>

            <video width="100%" controls autoplay muted>
                <source src="videos/video.mp4" />
                <source src="videos/video.ogv" />
            </video>

            <div class="iconPost">
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>

            <div class="desc">
                <img src="imagens/responde.png"/>
                    <p>Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong></p>
            </div>

            <div class="commentSection">
                <div class="comments">
                    <p class="infoPrin">sevelyn_art</p>
                    <p class="comment">Look at the bear peacefully strolling! How cute!</p>
                </div>

                <ion-icon name="heart-outline"></ion-icon>
            </div>

            <div class="commentInput">
                <ion-icon name="happy-outline"></ion-icon>
                <input type="text" placeholder="Adicione um comentário..."/>
                    <button>Publicar</button>
            </div>
        </div>
    );
}