import { Component, Prop, h, Host} from '@stencil/core';

@Component({
  tag: 'like-page',
  styleUrl: 'like-page.css',
  shadow: true,
})

export class likePage {
    @Prop() likeName: string;
    @Prop() likeType: string;

    render() {
        if(this.likeType == "like"){
            return (
                <Host>
                    <div class="like-elem le-like">
                        <span class="like-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3C0 496.5 15.52 512 34.66 512h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM616 200h-48v-48C568 138.8 557.3 128 544 128s-24 10.75-24 24v48h-48C458.8 200 448 210.8 448 224s10.75 24 24 24h48v48C520 309.3 530.8 320 544 320s24-10.75 24-24v-48h48C629.3 248 640 237.3 640 224S629.3 200 616 200z"/></svg></span>
                        <span class="like-name">{this.likeName}</span>
                        <span class="like-val">gefällt dein Beitrag</span>
                    </div>
                </Host>
            );
        }
        else if(this.likeType == "follow"){
            return (
                <Host>
                    <div class="like-elem le-follow">
                        <span class="like-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"></path></svg></span>
                        <span class="like-name">{this.likeName}</span>
                        <span class="like-val">folgt dir jetzt.</span>
                    </div>
                </Host>
            );
        }
    }
}