import { Component, h, Host, Element} from '@stencil/core';

@Component({
  tag: 'search-bar'
})

export class searchBar {
    @Element() el: HTMLSearchBarElement;

    componentDidLoad() {
        const searchInput = document.getElementById("search") as HTMLInputElement;

        if(searchInput.value.length >= 1){
            this.getResults(searchInput);
        }
    }

    getResults(el: any){
        let elem;

        if(el.id == "search"){
            elem = el;
        }
        else{
            elem = el.target;
        }

        let val = elem.value;
        val = val.replace(/[^a-zA-Z ]/g, "");

        const results = document.querySelector('.search-results') as HTMLDivElement;
        results.innerHTML = '<div class="res-headline"><span>Ergebnisse für: </span><span class="searchVal">' + val + '</span></div>';
        results.innerHTML += '<home-post hp-name="Botan Mustafa" hp-bild="botanmustafa.jpg" hp-post="post_1.jpg" hp-desc="Travel is the healthiest addiction. 🌴 _ #travel #vacation#happyme #pool #inlove #' + val + '"></home-post>';
        results.innerHTML += '<home-post hp-name="Botan Mustafa" hp-bild="botanmustafa.jpg" hp-post="post_2.jpg" hp-desc="Life looks better under water! 🐠🌊 _ #underwater #girl #tauchen #swimming #sea #' + val + '"></home-post>';
        results.innerHTML += '<home-post hp-name="Botan Mustafa" hp-bild="botanmustafa.jpg" hp-post="post_3.jpg" hp-desc="Forever my always! ❤ 6 Jahre schon mit dir an meiner Seite! _ #couple #love #vacation #happy #' + val + '"></home-post>';
    }

    render() {
        if(window.location.hash){
            let hash = window.location.hash;

            return (
                <Host>
                    <input onInput={this.getResults} placeholder="Suchbegriff eingeben" type="text" name="search" id="search" value={hash} />
                </Host>
            );
        }
        else{
            return (
                <Host>
                    <input onInput={this.getResults} placeholder="Suchbegriff eingeben" type="text" name="search" id="search" />
                </Host>
            );
        }
    }
}