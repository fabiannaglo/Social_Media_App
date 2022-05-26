import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'post-menu',
  styleUrl: 'post-menu.css',
  shadow: true,
})

export class postMenu {

    closePostMenu(){
        const menu = document.querySelector("post-menu");
        menu.classList.remove('open');
    }

    postMenu(el: any){
        const link = el.target as HTMLElement;
        const msg = document.querySelector('.simple-msg') as HTMLDivElement;

        if((link.id == "report")){
            msg.innerHTML = "Beitrag gemeldet!";
        }
        else if((link.id == "unfollow")){
            msg.innerHTML = "Erfolgreich entfolgt!";
        }
        else if((link.id == "share")){
            msg.innerHTML = "Die Teilen-Funktion ist vorrübergehend deaktiviert.";
        }
        else if((link.id == "copy-link")){
            navigator.clipboard.writeText("Hier steht der Beitragslink @ON-your-styleguide");

            msg.innerHTML = "Link kopiert!";
        }

        msg.classList.add("show");
        this.closePostMenu();

        window.setTimeout(function(){
            msg.classList.remove("show");
        }, 1000);
    }

    render() {
        return (
        <Host>
            <ul>
                <li>
                    <a id="report" onClick={(el)=>this.postMenu(el)}>Melden</a>
                </li>
                <li>
                    <a id="unfollow" onClick={(el)=>this.postMenu(el)}>Nicht mehr folgen</a>
                </li>
                <li>
                    <a id="share" onClick={(el)=>this.postMenu(el)}>Teilen in ...</a>
                </li>
                <li>
                    <a id="copy-link" onClick={(el)=>this.postMenu(el)}>Link kopieren</a>
                </li>
                <li>
                    <a onClick={()=>this.closePostMenu()}>Abbrechen</a>
                </li>
            </ul>
        </Host>
        );
    }
}