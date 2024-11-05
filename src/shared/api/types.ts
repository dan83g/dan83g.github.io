export enum RequestStatus {
  INITIAL = 'initial',
  LOADING = 'loading',
  ERROR = 'error',
  SUCCESS = 'success',
}

export const getApiParameters = <T>(params: T): Record<string, string> => {
  if (!params) return undefined;
  const result: Record<string, string> = {};
  Object.entries(params).forEach(([key, value]) => {
    if (typeof value === 'object' && value !== undefined && value !== null) {
      result[key] = JSON.stringify(value);
    } else {
      result[key] = value.toString();
    }
  });
  return result;
};

export interface IPagination {
  pageSize?: number;
  pageNumber?: number;
  total?: number;
}

export interface ISorting {
  type: 'ASC' | 'DESC';
  field: 'id' | 'createdAt' | 'updatedAt' | 'name';
}

export interface ICreatedAt {
  gte?: string;
  lte?: string;
}

export interface IUpdatatedAt {
  gte?: string;
  lte?: string;
}
