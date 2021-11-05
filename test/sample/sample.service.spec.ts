import { SampleService } from '@modules/sample/sample.service';
import { ISample } from '@common/interfaces';
import { SampleRepository } from '@modules/sample/sample.repository';

const SamplePayload = {
  email: 'elon.musk.ext@email.com',
  name: 'Elon Musk',
  phoneNumber: '55 54 123456789',
};

const SampleRepositoryMock: SampleRepository = {
  save: jest.fn().mockImplementation(async (Sample: ISample) => {
    return SamplePayload;
  }),
  findOne: jest.fn().mockImplementation(async (information) => {
    return true ? information.email === 'tony.stark.ext@email.com' : false;
  }),
} as unknown as SampleRepository;

let service: SampleService;

describe('SampleService', () => {
  beforeEach(async () => {
    service = new SampleService(SampleRepositoryMock);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('When processing a valid message', () => {
    it('should return the created media object', async () => {
      expect(await service.create(SamplePayload)).toEqual(SamplePayload);
    });
  });

  describe('When processing an invalid message', () => {
    it('should return an error if the e-mail is already registered', async () => {
      SamplePayload.email = 'tony.stark.ext@email.com';
      expect(await service.create(SamplePayload)).toBeUndefined();
    });
  });
});
