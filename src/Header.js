export default function Header() {
    return (
        <header>
            <nav>
                <ion-icon class="iconMobile" name="logo-instagram"></ion-icon>

                <div class="logo">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <img src="imagens/logo.png"/>
                </div>

                <div class="pesquisar">Pesquisar</div>
                
                <div class="icon">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <div class="iconDesktop">
                        <ion-icon name="compass-outline"></ion-icon>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="person-outline"></ion-icon>
                    </div>
                </div>
            </nav>
        </header>
        
    );
}