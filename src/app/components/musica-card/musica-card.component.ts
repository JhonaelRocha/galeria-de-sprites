import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-musica-card',
  templateUrl: './musica-card.component.html',
  styleUrls: ['./musica-card.component.css']
})
export class MusicaCardComponent {
    
    audioPath:string = "./assets/musicas/"

    @Input()
    titulo:string = "";
    @Input()
    audioSrc:string = "";
    @Input()
    id:string = "";
    @Input()
    volume:string = "1";

    audio:any = new Audio();
    

    playAudio(){
        let check = document.querySelector('.visible > img[src="./assets/icons/stop.png"]');
        if(check == null)
        {
            let playButton = document.getElementById(`${this.id}play`);
            let stopButton = document.getElementById(`${this.id}stop`);
    
            this.audio.src = this.audioPath+this.audioSrc;
            this.audio.volume = parseFloat(this.volume);
            this.audio.play();
            playButton?.classList.remove('visible');
            playButton?.classList.add('invisible');
            stopButton?.classList.remove('invisible');
            stopButton?.classList.add('visible');
    
            this.audio.addEventListener('ended', () => {
                this.stopAudio();
            });
        }
        else{
            console.log(check)
        }
    }
    stopAudio(){
        let playButton = document.getElementById(`${this.id}play`);
        let stopButton = document.getElementById(`${this.id}stop`);



        this.audio.pause();
        this.audio.currentTime = 0;
        playButton?.classList.remove('invisible');
        playButton?.classList.add('visible');
        stopButton?.classList.remove('visible');
        stopButton?.classList.add('invisible');
    }
}
