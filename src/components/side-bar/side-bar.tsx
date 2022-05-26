import { Component, h, Host, Element } from '@stencil/core';

@Component({
  tag: 'side-bar',
  styleUrl: 'side-bar.css',
  shadow: true,
})

export class sideBar {

  @Element() el: HTMLSideBarElement;  

  openContent(elemID: string){
    let elem = this.el.shadowRoot.getElementById(elemID) as HTMLElement;

    let all = this.el.shadowRoot.querySelectorAll("li");

    for(let i=0; i<all.length; i++){
      all[i].classList.remove("show");
      
      let thisDesc = all[i].querySelector(".desc") as HTMLDivElement;

      console.log(thisDesc);
      thisDesc.style.height = "0px";
    }

    let desc = elem.querySelector(".desc") as HTMLDivElement;
    
    if(desc.classList.contains("show")){
      desc.classList.remove("show");
    }
    else{
      desc.classList.add("show");
      desc.style.height = desc.scrollHeight + 20 + "px";
    }
  }

  render() {
    return (
      <Host>
        <ul>
            <li id="informationen">
              <a onClick={()=>this.openContent("informationen")}>Informationen</a>
              
              <div class="desc">
                <p>Hier halten wir dich auf dem neusten Stand.</p>
              </div>
            </li>
            <li id="ueber-uns">
              <a onClick={()=>this.openContent("ueber-uns")}>Über uns</a>
              
              <div class="desc">
                <p>Unser Team besteht aus fünf kreativen Student*innen, <br/>
                   die sich im Bereich Social Media engagieren. <br/>
                   Lerne uns gerne kennen!</p>
              </div>
            </li>
            <li id="impressum">
              <a onClick={()=>this.openContent("impressum")}>Impressum</a>
              
              <div class="desc">
                <p>social. <br/>
                   Social Straße 1 <br/>
                   00000 Socialstadt</p>
              </div>
            </li>
            <li id="datenschutz">
              <a onClick={()=>this.openContent("datenschutz")}>Datenschutz</a>
              
              <div class="desc">
                <p>Hier kommst du zu unserer Datenschutzerklärung.</p>
              </div>
            </li>
        </ul>
      </Host>
    );
  }
}
