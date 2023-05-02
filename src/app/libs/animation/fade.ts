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
    animate(200),
  ]),
  transition(':leave', [
    animate('200ms ease-out', style({ opacity: 0 })),
  ]),
]);
