import { TestBed } from '@angular/core/testing';

import { ObtenerPersonajesService } from './obtener-personajes.service';

describe('ObtenerPersonajesService', () => {
  let service: ObtenerPersonajesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtenerPersonajesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
