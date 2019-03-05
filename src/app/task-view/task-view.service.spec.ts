import { TestBed } from '@angular/core/testing';

import { TaskViewService } from './task-view.service';

describe('TaskViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskViewService = TestBed.get(TaskViewService);
    expect(service).toBeTruthy();
  });
});
