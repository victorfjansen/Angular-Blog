import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/components/template/header/header.service';
import { GlobalService } from 'src/app/global.service';
import { News } from 'src/utils/interfaces/News';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  news!:News[]

  constructor(private global: GlobalService, private headerService: HeaderService) { }

  ngOnInit(): void {
    this.headerService.updatePageName("Bem vindo! Veja as notícias mais recentes!")
    this.global.getNews().subscribe((news) => {
      this.news = news
    })
  }

}
