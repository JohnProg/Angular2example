import {
    Component,
    OnInit,
    ViewEncapsulation,
    EventEmitter,
    Input,
    Output
} from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'my-modal-content',
  templateUrl: './my-modal-content.component.html',
})
export class NgbdModalContent {
  @Input() modalObject;

  constructor(public activeModal: NgbActiveModal) {}
}