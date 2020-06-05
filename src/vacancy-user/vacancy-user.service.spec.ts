import { Test, TestingModule } from '@nestjs/testing';
import { VacancyUserService } from './vacancy-user.service';

describe('VacancyUserService', () => {
  let service: VacancyUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VacancyUserService],
    }).compile();

    service = module.get<VacancyUserService>(VacancyUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
