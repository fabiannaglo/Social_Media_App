import { Component, Prop, h, Host, Element} from '@stencil/core';

@Component({
  tag: 'home-post',
})
export class homePost {
    
    @Prop() hpName: string;
    @Prop() hpBild: string;
    @Prop() hpPost: string; 
    @Prop() hpDesc: string;

    @Element() el: HTMLHomePostElement;    

    likePost(el: any){
        el.classList.toggle("liked");
    }

    showComments(el: any){
        el.classList.toggle("showComments");

        const commentField = el.querySelector(".commentInput") as HTMLInputElement;
        commentField.select();

        console.log(commentField);
    }

    sendComment(el: any){
        const commentField = el.querySelector(".commentInput") as HTMLInputElement;
        const commentList = el.querySelector(".commentList") as HTMLDivElement;
        const msg = commentField.value;

        let dateNow = new Date();

        let day:any = dateNow.getDate();
        if(day <= 9){
            day = "0" + day;
        }

        let month:any = dateNow.getMonth();
        if(month <= 9){
            month = "0" + month;
        }

        let year = dateNow.getFullYear();

        let hours:any = dateNow.getHours();
        if(hours <= 9){
            hours = "0" + hours;
        }

        let min:any = dateNow.getMinutes();
        if(min <= 9){
            min = "0" + min;
        }


        let datetime =  day + "." + month + "." + year + " – " + hours + "." + min + " Uhr";

        let comment = document.createElement("div");
        comment.classList.add("comment");
        comment.innerHTML = '<div class="username">Botan Mustafa</div><div class="commentVal">' + msg + '</div><div class="date">' + datetime + '</div>';

        commentList.style.padding = "0 0 10px";
        commentList.appendChild(comment);
    }

    goToUserpage(){
        document.body.classList.add('no-scroll');

        const userpage = document.querySelector(".user-page");
        const container = userpage.querySelector(".container");
        container.innerHTML = '<user-page up-name="Botan Mustafa" up-bild="botanmustafa.jpg" up-desc="20 ✌🏽    ll     Brackenheim 📍"></user-page>';

        userpage.classList.add("open");

        const navbar = document.querySelector('nav.navbar') as HTMLElement;
        navbar.classList.add("subnav");
    }

    postMore(){
        const menu = document.querySelector("post-menu");
        menu.classList.add('open');
    }

    showShare(){
        document.querySelector("share-post").classList.add("open");
    }

    savePost(el:any){
        el.classList.toggle('saved');
    }


    render() {
        const imgPath = `/ON-your-styleguide/assets/profile-images/${this.hpBild}`;
        const postPath = `/ON-your-styleguide/assets/post-images/${this.hpPost}`;

        const anzahl = Math.floor(Math.random() * (800 - 5 + 1) + 5);

        let desc = this.hpDesc;
        let output = "";

        if(this.hpDesc.includes("#")){
            let descText = this.hpDesc.replace(/\b #\S+/ig,"");

            let hashtags:any = this.hpDesc.replace(descText, '');
            hashtags = hashtags.replace(/ /g, '');
            hashtags = hashtags.split('#');

            let hashtagLinks = "";

            for(let i:number = 0; i<hashtags.length; i++){
                if(hashtags[i].length > 0){
                    hashtagLinks += ' <a href="/ON-your-styleguide/suche.html#' + hashtags[i] + '">#' + hashtags[i] + '</a>';
                }
            }

            output = "<span>" + descText + "</span>";
            output += hashtagLinks;
        }
        else{
            output = desc;
        }




        return (
            <Host>

                <div class="home-post">
                    <div class="hp-head">
                        <div class="image">
                            <img src={imgPath} />
                        </div>
                        <div class="username">
                            <a onClick={()=>this.goToUserpage()}>{this.hpName}</a>
                        </div>
                        <div class="post-more" onClick={()=>this.postMore()}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200C94.93 200 120 225.1 120 256zM280 256C280 286.9 254.9 312 224 312C193.1 312 168 286.9 168 256C168 225.1 193.1 200 224 200C254.9 200 280 225.1 280 256zM328 256C328 225.1 353.1 200 384 200C414.9 200 440 225.1 440 256C440 286.9 414.9 312 384 312C353.1 312 328 286.9 328 256z"/></svg>
                        </div>
                    </div>
                    <div class="hp-content">
                        <div class="image postImage" onDblClick={()=>this.likePost(this.el)}>
                            <img src={postPath} />
                            <div class="like-anim">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"/></svg>
                            </div>
                        </div>
                        <div class="text">
                            <div class="actions">
                                <div class="action-btn action-like" onClick={()=>this.likePost(this.el)}>
                                    <svg class="not-liked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/></svg>
                                    <svg class="liked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"/></svg>
                                </div>
                                <div class="action-btn action-comment" onClick={()=>this.showComments(this.el)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 32C114.6 32 .0272 125.1 .0272 240c0 47.63 19.91 91.25 52.91 126.2c-14.88 39.5-45.87 72.88-46.37 73.25c-6.625 7-8.375 17.25-4.625 26C5.818 474.2 14.38 480 24 480c61.5 0 109.1-25.75 139.1-46.25C191.1 442.8 223.3 448 256 448c141.4 0 255.1-93.13 255.1-208S397.4 32 256 32zM256.1 400c-26.75 0-53.12-4.125-78.38-12.12l-22.75-7.125l-19.5 13.75c-14.25 10.12-33.88 21.38-57.5 29c7.375-12.12 14.37-25.75 19.88-40.25l10.62-28l-20.62-21.87C69.82 314.1 48.07 282.2 48.07 240c0-88.25 93.25-160 208-160s208 71.75 208 160S370.8 400 256.1 400z"/></svg>
                                </div>
                                <div class="action-btn action-share" onClick={()=>this.showShare()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M568.5 142.6l-144-135.1c-9.625-9.156-24.81-8.656-33.91 .9687c-9.125 9.625-8.688 24.81 .9687 33.91l100.1 94.56h-163.4C287.5 134.2 249.7 151 221 179.4C192 208.2 176 246.7 176 288v87.1c0 13.25 10.75 23.1 24 23.1S224 389.3 224 376V288c0-28.37 10.94-54.84 30.78-74.5C274.3 194.2 298.9 183 328 184h163.6l-100.1 94.56c-9.656 9.094-10.09 24.28-.9687 33.91c4.719 4.1 11.06 7.531 17.44 7.531c5.906 0 11.84-2.156 16.47-6.562l144-135.1C573.3 172.9 576 166.6 576 160S573.3 147.1 568.5 142.6zM360 384c-13.25 0-24 10.75-24 23.1v47.1c0 4.406-3.594 7.1-8 7.1h-272c-4.406 0-8-3.594-8-7.1V184c0-4.406 3.594-7.1 8-7.1H112c13.25 0 24-10.75 24-23.1s-10.75-23.1-24-23.1H56c-30.88 0-56 25.12-56 55.1v271.1C0 486.9 25.13 512 56 512h272c30.88 0 56-25.12 56-55.1v-47.1C384 394.8 373.3 384 360 384z"/></svg>
                                </div>
                                <div class="action-btn action-save" onClick={()=>this.savePost(this.el)}>
                                    <svg class="not-saved" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M384 48V512l-192-112L0 512V48C0 21.5 21.5 0 48 0h288C362.5 0 384 21.5 384 48z"/></svg>

                                    <svg class="saved" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M336 0h-288C21.49 0 0 21.49 0 48v431.9c0 24.7 26.79 40.08 48.12 27.64L192 423.6l143.9 83.93C357.2 519.1 384 504.6 384 479.9V48C384 21.49 362.5 0 336 0zM336 452L192 368l-144 84V54C48 50.63 50.63 48 53.1 48h276C333.4 48 336 50.63 336 54V452z"/></svg>
                                    
                                </div>
                            </div>

                            <div class="likes">
                                <span>Gefällt </span><span>{anzahl} Personen</span>
                            </div>

                            <div class="name">
                                <span class="username">
                                    <a onClick={()=>this.goToUserpage()}>{this.hpName}</a>
                                </span>
                                <span class="desc" innerHTML={output}></span>
                            </div>

                            <div class="commentField">
                                <div class="commentList"></div>
                                <input type="text" class="commentInput" name="commentInput" />
                                <div class="commentSend" onClick={()=>this.sendComment(this.el)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"/></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Host>
        );
    }
}