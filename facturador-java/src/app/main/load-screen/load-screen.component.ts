import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-load-screen',
  templateUrl: './load-screen.component.html',
  styleUrls: ['./load-screen.component.scss'],
})
export class LoadScreenComponent implements OnInit {
  @ViewChild('line') line: ElementRef;
  @ViewChild('contentLoad') loadContainer: ElementRef;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.animationLoad();
  }
  animationLoad() {
    this.line.nativeElement.classList.add('lineAnimation');
    this.line.nativeElement.addEventListener('animationend', () => {
      this.loadContainer.nativeElement.classList.add('endLoginAnimation');
      this.loadContainer.nativeElement.addEventListener('animationend', () => {
        this.main();
      });
    });
  }
  main() {
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 2000);
  }
}
