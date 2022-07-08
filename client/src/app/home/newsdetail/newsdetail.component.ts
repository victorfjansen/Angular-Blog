import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';
import { GlobalService } from 'src/app/global.service';
import { Comments } from 'src/utils/interfaces/Comments';
import { News } from 'src/utils/interfaces/News';

@Component({
  selector: 'app-newsdetail',
  templateUrl: './newsdetail.component.html',
  styleUrls: ['./newsdetail.component.css']
})
export class NewsdetailComponent implements OnInit {

  routeId!: number
  newsInfo!: News
  comments!: Comments[]
  newComment: Comments = {
    user: '',
    content: ''
  }
  atualizarState:boolean = false

  constructor(private globalService: GlobalService, private headerService: HeaderService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.routeId = params['id']
    })
    this.globalService.getNewsById(this.routeId).subscribe((news) => {
      this.newsInfo = news
      this.headerService.updatePageName(news.title)
    })
    this.globalService.getComments().subscribe((data) => this.comments = data)
    window.scrollTo({
      behavior: "smooth",
      top:0
    })
  }

  handleCreateComment() {
    this.globalService.createComment(this.newComment).subscribe(() => {
      this.globalService.showNotifier('success', 'Comentário adicionado!')
      this.globalService.getComments().subscribe((data) => this.comments = data)
    })
    this.newComment = {
      content: '',
      user: ''
    }
  }

  handleDeleteComment(id:number) {
    this.globalService.deleteComment(id).subscribe(() => {
      this.globalService.showNotifier('success', 'Comentário deletado com sucesso!')
      this.globalService.getComments().subscribe((data) => this.comments = data)
    })
  }  

  handleGetComment(id:number) {
    const comment = this.comments.filter((item) => item.id == id)
    if(comment) this.globalService.showNotifier("success", "Edite seu comentário!")
    this.newComment = {...comment[0]}
    this.atualizarState = true
    window.scrollTo({
      behavior: "smooth",
      top: 1000000
    })
  }

  handleUpdateComment(){
    this.globalService.updateComment(this.newComment.id!, this.newComment).subscribe(() => {
      this.globalService.showNotifier("success", "Comentário atualizado com sucesso!")
      this.globalService.getComments().subscribe((data) => this.comments = data)
      this.newComment = {
        content: '',
        user: ''
      }
      this.atualizarState = false
    })
  }
}
