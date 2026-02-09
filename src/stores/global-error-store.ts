import { makeAutoObservable } from 'mobx';

export type TErrorModal = 'generic';

class GlobalErrorStore {
  errorType: TErrorModal | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  showError(type: TErrorModal) {
    this.errorType = type;
  }

  clearError() {
    this.errorType = null;
  }
}

export const globalErrorStore = new GlobalErrorStore();
