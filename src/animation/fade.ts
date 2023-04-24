import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

export let fade = trigger('fade', [
  transition(':enter', [
    style({ opacity: 0, transform: '' }),
    animate(800),
  ]),
  transition(':leave', [
    animate(100, style({ transform: 'translateX(100%)' })),
  ]),
]);
