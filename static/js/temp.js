class myheader extends HTMLElement {  //import header file in which the navigation bar is stored 
    connectedCallback() {
        this.innerHTML = ` 

        <nav class="navbar">

        <a href="http://localhost/"> <div class="logo">Balajigarage.com</div> </a>

        <a class="humberger">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
        </a>
        <div class="navlist">
            <ul>
                <a href="http://localhost/">  <li class="li">Home</li>  </a>
                <a href="http://localhost/services"> <li class="li">Services</li>  </a>
                <a href="http://localhost/about"> <li class="li">About</li>     </a>
                <a href="http://localhost/contact"> <li class="li">Contact</li>   </a>
            </ul>
        </div>

    </nav>

         `
    }
}
customElements.define('my-header', myheader);  //assign the value of myheader class to 'my-header' tag 


class mycss extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <style>

        *{
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-size: 62.5%;
            
        }
        /* header menu css */
        
        .navbar{ 
            background-color:#090a0a;
            min-width:100%;
            overflow:auto;
            position: fixed;  
            top:0px;  
            display: flex;
            align-items: center;
         }
         .navlist{
             display: flex;
         }
        .li{
            list-style: none;
            display:inline;
           margin-right: 2rem;
           padding: 0.2rem 1.4rem;
           border-radius: 0.8rem;
           font-size: 2rem;
           color: white;
           cursor: pointer;
           font-family: 'Oswald', sans-serif;
           text-align: left;
        }
        .humberger{
            display: none;
            flex-direction: column;
            width: 3rem;
            height: 1.8rem;
            position: absolute;
            top: 1.5rem;
            right: 1rem;
            justify-content: space-between;
            cursor: pointer;
        
        }
        .line{
            
            height: 0.23rem;
            width: 100%;
            background-color: white;
        }
        .navlist ul{
            display: flex;
            align-items: center;
            
        }
        
        .li:hover{
            color: silver;
            background-color: rgb(19, 70, 146);
        
        }
        .logo{
            color: white;
            margin-right: 4rem;
            font-family: 'Changa', sans-serif;
            font-size: 3.2rem;
            padding: 0;
        }
        .logo:hover{
            color:rgb(146, 143, 143);
            cursor: pointer;
        }
        
        

        /* footer menu css */
        
        .footer{
            font-size: 1rem;
            position: sticky;
            left: 0;
            bottom: 0;
            text-align: center;
            width:100%;
        }
        .mainbox{
            display: flex;
            justify-content: space-between;
            align-items: center; 
        }
        .subbox{
            font-size: 1.7rem;
            font-family: 'Kanit', sans-serif;
            margin: 2rem;
        }
        .subbox a{
            font-size: 1.8rem;
            text-decoration: none;
        }
        .subbox b{
            font-size: 2rem;
        }
        
        @media (max-width:1000px) {
        
            .navbar{
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
            
        }
        
        @media(max-width:700px){
             
             .navlist{
                 display: none;
                 flex-direction: column;
                 width: 100%;
                
             }
             .navlist ul{
                 flex-direction: column;
        
             }
             .li{
                 display: block;
                 width: 100%;
                 text-align: center;
                 font-size: 1.8rem;
                 padding: 1rem;
                 margin: auto;
             }
             .logo{
                 text-align: center;
                 font-size: 2.3rem;
                 
             }
             .humberger {
               display: flex;
             }
             
             .navlist.active{
                 display: flex;
             }
              
        
        
        @media(max-width:500px){
           
            .mainbox{
                flex-direction: column;
            }
            .subbox{
                width: 90%;
            }
        
            }

            @media (max-width:325px){
                
                .logo{
                    font-size: 1.3rem;
                }
                .humberger{
                    width: 2rem;
                    height: 0.8rem;
                    top: 1rem;
                }
            }
        
        
        </style>
        `
    }
}
customElements.define('my-css', mycss);

class myfooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            `
       <div class="footermenu">
        <div class="mainbox">
            <div class="subbox"> <b>Address:</b><br> highway bypass, dehu-alandi road, chikhali, pune 411062.</div>
            <div class="subbox">visit our <a href="https://www.facebook.com/hemant.aher.566">facebook</a> page</div>
        </div>
        <div class="mainbox">
            <div class="subbox"> <b> E-mail:</b><br> hemantaher13@gmail.com</div>
            <div class="subbox"> follow us on <a href="https://www.instagram.com/hemant_9751/">instagram</a></div>
        </div>
        <div class="mainbox">
            <div class="subbox">&#128222+917249720500</div>
        </div>
    </div>

    <footer>
        <div class="footer">
            2021copyright@balajigarage.com
        </div>
    </footer>

    </div>

    <script src="js/header-footer.js"></script>

   `
    }
}
customElements.define('my-footer', myfooter);


// navigation slider

const humberger = document.getElementsByClassName('humberger')[0];
 const navlist = document.getElementsByClassName('navlist')[0];
 const cont1=document.getElementsByClassName('cont1')[0]


 humberger.addEventListener('click', () => {
     navlist.classList.toggle('active')
     cont1.classList.toggle('active')


 });
