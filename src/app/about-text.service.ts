import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutTextService {
  _fullName: string = "Talha Şeref ALATAŞ";
  _image: string = ".../../assets/resim/profil.jpg";
  _developer: string[] = ["HTML", "CSS", "JavaScript", "Angular"];
  _aboutText: string = `Merhaba, ben Talha Şeref Alataş. Gazi Üniversitesi Elektrik Elektronik Mühendisliği mezunuyum.Kariyerime oyun geliştirme alanında başladım ve zamanla JavaScript ve Angular gibi teknolojilere odaklandım, böylece frontend web tasarımı konusunda uzmanlaştım.Şu anda, BTK Akademi kampüsünde eğitmen olarak çalışmaktayım ve yeni nesillerin teknoloji dünyasına adım atmalarına yardımcı olmaktan mutluluk duyuyorum. `
  _aboutTextlist: string = `
  Bu süreçte birçok ilginç proje üzerinde çalışma fırsatı buldum.Bazı önemli projelerim arasında şunlar bulunmaktadır:
  
    Flappy Bird(Unity3d)
    Kasım 2020
    \nRoll a Ball(Unity 3d)
    Kasım 2020
    \nTraffic Racer(Unity 3d)
    Temmuz 2020
    \n Pokey Ball Clone(Unity 3d)
    Haziran 2020
    \nBallControl(Unity 3d)
    Nisan 2020
    \n Collect Cubes(Unity 3d)
    Şubat 2020
    \nBalon Patlatma(Unity 3d)
     Ocak 2020
     \n Klinik Takip Sistemi
    Ekim 2019
    \nBu projeler üzerinden deneyim kazandım ve kendimi sürekli geliştirmeye devam ediyorum.Her projede yeni bir şeyler öğrenmek ve becerilerimi artırmak benim için heyecan verici bir deneyimdir.
  `
constructor() { }
}
