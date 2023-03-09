import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

export let fade = trigger('fade', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(-50px)' }),
    animate(600),
  ]),
  transition(':leave', [
    animate(100, style({ transform: 'translateX(100%)' })),
  ]),
]);
