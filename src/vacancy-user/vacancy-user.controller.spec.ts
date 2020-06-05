import { Test, TestingModule } from '@nestjs/testing';
import { VacancyUserController } from './vacancy-user.controller';

describe('VacancyUser Controller', () => {
  let controller: VacancyUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VacancyUserController],
    }).compile();

    controller = module.get<VacancyUserController>(VacancyUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
