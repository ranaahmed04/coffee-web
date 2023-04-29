class Footer extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
        .conditions{
            background-color: #E5D3B3;
            color: rgb(149, 44, 44);
            text-align: center;
        
         }
         .coffcafe img{
            width: 40px;
            height: 40px;
            padding: 20px;
            gap: 20px;
         }
         footer{
            background-color: #E5D3B3;
         }

        </style>

        <footer>
        <div class="conditions">
        <div class="coffcafe">
            <h2>Coffee cafe</h2>
            <p>@ all rights are reserved </p>
            <img src="images/facebook.png" alt="facebook">
            <img src="images/google.png" alt="google">
            <img src="images/instagram.png" alt="instagram">

            
        </div>
        </footer>
        `;
    }
}
    customElements.define('footer-component', Footer);