import { Component, Prop, h, Listen } from '@stencil/core';

@Component({
  tag: 'navbar-elem',
  styleUrl: 'navbar-elem.css',
  shadow: true,
})

export class navbarElem {
    @Prop() onclickProp: string;

    @Listen("click")
    clickListener() {
      if(this.onclickProp == "sidebar"){
        document.querySelector('msg-page').classList.remove('open');
        const sidebarBlock = document.querySelector(".sidebar");
  
        if(sidebarBlock.classList.contains("open")){
          sidebarBlock.classList.remove("open");
          document.body.classList.remove('no-scroll');
        }
        else{
          sidebarBlock.classList.add("open");
          document.body.classList.add('no-scroll');
        }
      }
      else if(this.onclickProp == "msg"){
        document.querySelector('.sidebar').classList.remove('open');
        const msgPage = document.querySelector("msg-page");
  
        if(msgPage.classList.contains("open")){
          msgPage.classList.remove("open");
          document.body.classList.remove('no-scroll');
        }
        else{
          msgPage.classList.add("open");
          document.body.classList.add('no-scroll');
        }
      }
      else if(this.onclickProp == "back"){
        location.reload();
      }
    }

    render() {
        if(this.onclickProp == "sidebar"){
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/></svg>
            );
        }
        else if(this.onclickProp == "msg"){
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M447 56.25C443.5 42 430.7 31.1 416 31.1H96c-14.69 0-27.47 10-31.03 24.25L3.715 304.9C1.247 314.9 0 325.2 0 335.5v96.47c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48v-96.47c0-10.32-1.247-20.6-3.715-30.61L447 56.25zM352 352H160L128 288H72.97L121 96h270l48.03 192H384L352 352z"/></svg>
            );
        }
        else if(this.onclickProp == "back"){
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"/></svg>
            );
        }
    }
}
