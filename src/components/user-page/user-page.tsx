import { Component, Prop, h, Host} from '@stencil/core';

@Component({
  tag: 'user-page',
  styleUrl: 'user-page.css',
  shadow: true,
})
export class userPage {
    @Prop() upName: string;
    @Prop() upBild: string;
    @Prop() upDesc: string;

    followUser(event: MouseEvent){
        let btn = event.target as HTMLDivElement;

        if(btn.classList.contains("followed")){
            btn.innerHTML = "Folgen";
            btn.classList.remove("followed");
        }
        else{
            btn.innerHTML = "Gefolgt";
            btn.classList.add("followed");
        }
    }

    render() {
        const imgPath = `/ON-your-styleguide/assets/profile-images/${this.upBild}`;
        const follower = Math.floor(Math.random() * (800 - 5 + 1) + 5);
        const following = Math.floor(Math.random() * (800 - 5 + 1) + 5);
        const title = "Teeküchenmeister";
        
        let posts = [
            ["/ON-your-styleguide/assets/post-images/post_1.jpg", "Text", "#hashtags"],
            ["/ON-your-styleguide/assets/post-images/post_2.jpg", "Text", "#hashtags"],
            ["/ON-your-styleguide/assets/post-images/post_3.jpg", "Text", "#hashtags"],
            ["/ON-your-styleguide/assets/post-images/post_4.jpg", "Text", "#hashtags"],
            ["/ON-your-styleguide/assets/post-images/post_5.jpg", "Text", "#hashtags"],
            ["/ON-your-styleguide/assets/post-images/post_6.jpg", "Text", "#hashtags"],
            ["/ON-your-styleguide/assets/post-images/post_7.jpg", "Text", "#hashtags"],
            ["/ON-your-styleguide/assets/post-images/post_8.jpg", "Text", "#hashtags"],
            ["/ON-your-styleguide/assets/post-images/post_9.jpg", "Text", "#hashtags"],
            ["/ON-your-styleguide/assets/post-images/post_10.jpg", "Text", "#hashtags"]
        ];
        

        let userPosts = "";

        for(let i=0; i<10; i++){
            const post = posts[i];

            let postInner = "";
            postInner += '<div class="post-img"><img src="' + post[0] + '"></div>';
            postInner += '<div class="post-desc">';
            postInner += '<span class="post-text">' + post[1] + '</span>';
            postInner += '<span class="post-hashtags">' + post[2] + '</span>';
            postInner += '</div>';

            userPosts += '<div class="post">' + postInner + '</div>';
        }

        return (
            <Host>
                <div class="userpage">
                    <div class="up-head">
                        <div class="image">
                            <img src={imgPath} />
                        </div>
                        <div class="username">
                            <div class="name">{this.upName}</div>
                            <div class="follow-btn" onClick={(e)=>this.followUser(e)}>Folgen</div>
                        </div>
                    </div>
                    <div class="up-content">
                        <div class="up-name">{this.upName}</div>
                        <div class="up-title">{title}</div>
                        <div class="up-desc" innerHTML={this.upDesc}></div>
                    </div>
                    <div class="up-stats">
                        <div class="up-stat">
                            <div class="up-stat-val">
                                10
                            </div>
                            <div class="up-stat-text">
                                Beiträge
                            </div>
                        </div>

                        <div class="up-stat">
                            <div class="up-stat-val">
                                {follower}
                            </div>
                            <div class="up-stat-text">
                                Follower
                            </div>
                        </div>

                        <div class="up-stat">
                            <div class="up-stat-val">
                                {following}
                            </div>
                            <div class="up-stat-text">
                                abonniert
                            </div>
                        </div>
                    </div>
                    <div class="up-posts" innerHTML={userPosts}></div>
                </div>
            </Host>
        );
    }
}