class Header extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = ` 
        <style>
        .header{
            display: grid;
            padding: 10px 20px 0px;
            grid-template-columns:  30% 70%;
            border-radius: 80px;
            background-color: #E5D3B3;
        }
        .logo{
            display: grid;
            grid-template-columns:  30% 70%;
            padding: 10px 10px 0px;
        
        
        
        }
        .logo img{
            float: left;
            margin-left: 20px;
            border-radius: 80px;
            width: 70px;
            height: 70px;
        }
        
        .brand-name {
            color: rgb(149, 44, 44);
            margin-right: 80px;
            margin-bottom: 10px;
            font-size: 30px;
            font-style: italic;
        
        
        }
        
        .navigation-bar{
           margin-left: 400px;
            padding: 20px;
            float: right;
            overflow: hidden;
        }
        .navigation-bar a{
            float: left;
            text-align: center;
            padding: 19px 22px;
            text-decoration:solid;
            color: rgb(149, 44, 44);
            font-size: 23px;
            font-weight: bold;
        }
        .navigation-bar a:hover {
            background-color: #dcc2c2;
            border-radius: 70px;
            text-decoration: underline;
          }
        
        .navigation-bar a:focus {
            background-color: #c56969;
            color: white;
            border-radius: 70px;
            text-decoration: underline;
          }
        // .navigation-bar a:active {
        //     background-color:  #c56969;
        //     border-radius: 70px;
        //     color: white;
 
        //   }
      
          
        </style>
        <header>
        <div class="header">
         <div class="logo">

            <img src="images/logo.jpg" alt="logo image">
            <p class="brand-name"> Coffee Cafe </p>
           
         </div>

        <div class="navigation-bar">
            <a href="Home-page.html" class="home">Home</a>
            <a href="Menu.html">Menu</a>
            <a href="About-page.html">About</a>
            <a href="contact.html">Contact</a>   
        </div>
        </div>
        </header>
        `;
    }
}
    customElements.define('header-component', Header);
  