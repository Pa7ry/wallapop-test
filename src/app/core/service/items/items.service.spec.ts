import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';

import { ItemsService } from './items.service';

describe('ItemsService', () => {
  let httpTestingController: HttpTestingController;
  let service: ItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ItemsService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected items when getItems is called', () => {
    const expectedItems = {
      items: [
        {
          title: 'iPhone 6S Oro',
          description:
            'Vendo un iPhone 6 S color Oro nuevo y sin estrenar. Me han dado uno en el trabajo y no necesito el que me compré. En tienda lo encuentras por 749 euros y yo lo vendo por 740. Las descripciones las puedes encontrar en la web de apple. Esta libre.',
          price: '740',
          email: 'iphonemail@wallapop.com',
          image: 'https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/iphone.png',
        },
      ],
    };

    service.getItems().subscribe((items) => expect(items.items[0].email).toEqual('iphonemail@wallapop.com'));

    const req = httpTestingController.expectOne(environment.urlItems);
    expect(req.request.method).toEqual('GET');

    req.flush(expectedItems);
  });
});
