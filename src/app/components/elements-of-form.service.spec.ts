import { TestBed } from '@angular/core/testing';

import { ElementsOfFormService } from './elements-of-form.service';

describe('ElementsOfFormService', () => {
  let service: ElementsOfFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElementsOfFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
