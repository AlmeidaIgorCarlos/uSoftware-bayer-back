import { Test, TestingModule } from '@nestjs/testing';
import { ApplyerService } from './applyer.service';

describe('ApplyerService', () => {
  let service: ApplyerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApplyerService],
    }).compile();

    service = module.get<ApplyerService>(ApplyerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
