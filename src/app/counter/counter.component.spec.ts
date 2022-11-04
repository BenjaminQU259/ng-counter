import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add 1 when click plus button', () => {
    // given
    component.count = 0;
    const plusBtn = fixture.nativeElement.querySelector('[data-test="plusBtn"]');
    // when
    plusBtn.click();
    fixture.detectChanges();
    // then
    const displayCount = fixture.nativeElement.querySelector('[data-test="displayCount"]')
    expect(displayCount.textContent).toEqual('number: 1');
  });

  it('should subtract 1 when click subtract button', () => {
    // given
    component.count = 0;
    const subtractBtn = fixture.nativeElement.querySelector('[data-test="subtractBtn"]');
    // when
    subtractBtn.click();
    fixture.detectChanges();
    // then
    const displayCount = fixture.nativeElement.querySelector('[data-test="displayCount"]')
    expect(displayCount.textContent).toEqual('number: -1');
  });

  it('should hide subtract button when count number less than 0', () => {
    // given
    component.count = -1;
    // when
    fixture.detectChanges();
    // then
    const subtractBtn = fixture.nativeElement.querySelector('[data-test="subtractBtn"]')
    expect(subtractBtn).toBeFalsy();
  });

  it('should hide plus button when count number greater than 10', () => {
    // given
    component.count = 11;
    // when
    fixture.detectChanges();
    // then
    const plusBtn = fixture.nativeElement.querySelector('[data-test="plusBtn"]')
    expect(plusBtn).toBeFalsy();
  });

  it('should return false when count number less than 0', () => {
    // given
    component.count = -1;
    // then
    expect(component.isGreaterOrEqualToZero()).toBeFalse();
  });

  it('should return true when count number not less than 0', () => {
    // given
    component.count = 1;
    // then
    expect(component.isGreaterOrEqualToZero()).toBeTrue();
  });

  it('should return false when count number greater than 10', () => {
    // given
    component.count = 11;
    // then
    expect(component.isLessOrEqualToTen()).toBeFalse();
  });

  it('should return true when count number not greater than 10', () => {
    // given
    component.count = 9;
    // then
    expect(component.isLessOrEqualToTen()).toBeTrue();
  });

  it('should reset count to 0 when click reset button', () => {
    // given
    component.count = 2;
    const resetBtn = fixture.nativeElement.querySelector('[data-test="resetBtn"]');
    // when
    resetBtn.click();
    fixture.detectChanges();
    // then
    const displayCount = fixture.nativeElement.querySelector('[data-test="displayCount"]')
    expect(component.count).toEqual(0);
  });
});
