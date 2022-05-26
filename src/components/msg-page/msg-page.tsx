import { Component, h } from '@stencil/core';

@Component({
  tag: 'msg-page',
  styleUrl: 'msg-page.css',
  shadow: true,
})

export class msgPage {
    render() {  
        let profiles = [
            ["/ON-your-styleguide/assets/post-images/post_1.jpg", "Botan Mustafa", 1],
            ["/ON-your-styleguide/assets/post-images/post_2.jpg", "Kathrin Falch", 0],
            ["/ON-your-styleguide/assets/post-images/post_3.jpg", "Kai Havertz", 0],
            ["/ON-your-styleguide/assets/post-images/post_4.jpg", "Lisa Müller", 1],
            ["/ON-your-styleguide/assets/post-images/post_5.jpg", "Jeremy Pasquale", 0],
            ["/ON-your-styleguide/assets/post-images/post_6.jpg", "Andy_Arbeit", 1],
            ["/ON-your-styleguide/assets/post-images/post_7.jpg", "Jannik Öhler", 0],
            ["/ON-your-styleguide/assets/post-images/post_8.jpg", "Sergio Lopez", 0],
            ["/ON-your-styleguide/assets/post-images/post_9.jpg", "74Bra.Luis", 0],
            ["/ON-your-styleguide/assets/post-images/post_10.jpg", "Peter Silie", 0]
        ];
          
        let userMsg = "";
    
        for(let i=0; i<10; i++){
            const msg = profiles[i];
    
            let status = "off";
            let statusText = "Offline"
            if(msg[2] != 0){
                status = "on";
                statusText = "Jetzt aktiv";
            }
    
            let msgInner = "";
            msgInner += '<div class="message">';
            msgInner += '<div class="image">';
            msgInner += '<img src="' + msg[0] + '" />';
            msgInner += '<div class="login-icon login-' + status + '"></div>';
            msgInner += '</div>';
            msgInner += '<div class="content">';
            msgInner += '<div class="title">' + msg[1] + '</div>';
            msgInner += '<div class="subtitle">' + statusText + '</div>';
            msgInner += '</div>';
            msgInner += '</div>';
    
            userMsg += '<div class="message">' + msgInner + '</div>';
        }

        return (
            <div class="msg-page">
                <div class="inner" innerHTML={userMsg}></div>
            </div>
        );
    }
}