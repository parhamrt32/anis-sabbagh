import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

export let fade = trigger('fade', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate(300),
  ]),
  transition(':leave', [
    animate('400ms ease-out', style({ opacity: 0 })),
  ]),
]);
