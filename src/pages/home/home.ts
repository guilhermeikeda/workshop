import { Component } from '@angular/core';
import { NavController, LoadingController, ModalController, ToastController } from 'ionic-angular';
import { CadastroTimePage } from '../cadastro-time/cadastro-time';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tipoBusca: string;
  times: any;
  loader: any;
  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController) {
    this.times = [
      {
        "nome": "F.C Opus",
        "url_escudo_png": "https://scontent.fcgh14-1.fna.fbcdn.net/v/t1.0-9/15241192_10154732158199420_2274481397122737370_n.jpg?oh=6cc46cc011cc87b6e1b1340bd6eb8ae9&oe=58BC68B2",
        "pontuacao": "120,00"
      },
      {
        "nome": "F.C Opus",
        "url_escudo_png": "https://scontent.fcgh14-1.fna.fbcdn.net/v/t1.0-9/15241192_10154732158199420_2274481397122737370_n.jpg?oh=6cc46cc011cc87b6e1b1340bd6eb8ae9&oe=58BC68B2",
        "pontuacao": "120,00"
      },
      {
        "nome": "F.C Opus",
        "url_escudo_png": "https://scontent.fcgh14-1.fna.fbcdn.net/v/t1.0-9/15241192_10154732158199420_2274481397122737370_n.jpg?oh=6cc46cc011cc87b6e1b1340bd6eb8ae9&oe=58BC68B2",
        "pontuacao": "120,00"
      },
      {
        "nome": "F.C Opus",
        "url_escudo_png": "https://scontent.fcgh14-1.fna.fbcdn.net/v/t1.0-9/15241192_10154732158199420_2274481397122737370_n.jpg?oh=6cc46cc011cc87b6e1b1340bd6eb8ae9&oe=58BC68B2",
        "pontuacao": "120,00"
      },
      {
        "nome": "F.C Opus",
        "url_escudo_png": "https://scontent.fcgh14-1.fna.fbcdn.net/v/t1.0-9/15241192_10154732158199420_2274481397122737370_n.jpg?oh=6cc46cc011cc87b6e1b1340bd6eb8ae9&oe=58BC68B2",
        "pontuacao": "120,00"
      },
      {
        "nome": "F.C Opus",
        "url_escudo_png": "https://scontent.fcgh14-1.fna.fbcdn.net/v/t1.0-9/15241192_10154732158199420_2274481397122737370_n.jpg?oh=6cc46cc011cc87b6e1b1340bd6eb8ae9&oe=58BC68B2",
        "pontuacao": "120,00"
      },
      {
        "nome": "F.C Opus",
        "url_escudo_png": "https://scontent.fcgh14-1.fna.fbcdn.net/v/t1.0-9/15241192_10154732158199420_2274481397122737370_n.jpg?oh=6cc46cc011cc87b6e1b1340bd6eb8ae9&oe=58BC68B2",
        "pontuacao": "120,00"
      },
      {
        "nome": "F.C Opus",
        "url_escudo_png": "https://scontent.fcgh14-1.fna.fbcdn.net/v/t1.0-9/15241192_10154732158199420_2274481397122737370_n.jpg?oh=6cc46cc011cc87b6e1b1340bd6eb8ae9&oe=58BC68B2",
        "pontuacao": "120,00"
      }
    ];
  }

  cadastrarTime() {
    let modal = this.modalCtrl.create(CadastroTimePage);
    modal.present();
    modal.onWillDismiss(data => {
      this.times.unshift({
        "nome": data.nome,
        "pontuacao": data.pontuacao,
        "url_escudo_png": "https://4.bp.blogspot.com/-z0Z40cOs7lo/VwlMnu_HUJI/AAAAAAAAHZw/CtyXl68K2bAgWRvMFKteWmXQDtX8OebBQ/s1600/chapecoense.png"
      });
    })
  }

  buscarTimes(event: any) {
    let nomeTime = event.target.value;

    this.loader = this.loadingCtrl.create({
      content: 'Aguarde..'
    });

    this.loader.present();

    this.toastCtrl.create({
      message: nomeTime,
      duration: 3000
    }).present();

    setTimeout(() => {
      this.loader.dismiss();
    }, 2000)
  }
}
