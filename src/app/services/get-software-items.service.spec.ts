import { TestBed } from '@angular/core/testing';

import { GetSoftwareItemsService } from './get-software-items.service';

describe('GetSoftwareItemsService', () => {
  let service: GetSoftwareItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSoftwareItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
