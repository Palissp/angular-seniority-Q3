import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import {Component, ViewChild} from "@angular/core";

@Component({
  selector: 'app-host',
  template: `<app-card [src]="src" [title]="title" [attack]="attack" [defense]="defense" [skills]="skills"></app-card> `
})
class HostComponent {
  @ViewChild(CardComponent)
  public cardComponent!: CardComponent;
  public src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Lionel_Messi_20180626.jpg/640px-Lionel_Messi_20180626.jpg";
  public title = "Lionel Messi";
  public attack = 95;
  public defense = 34;
  public skills = 91;
}

describe('CardComponent', () => {
  let component: CardComponent;
  let hostComponent: HostComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponent, HostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Events emitter component', () => {
    jest.spyOn(component.onClickEditEvent, 'emit');

    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelector('button');
    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.onClickEditEvent.emit).toHaveBeenCalled();
  });

});
