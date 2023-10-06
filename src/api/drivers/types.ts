import { Driver } from '../../types';

export type GetDriversResponse = {
  MRData: {
    xmlns: string;
    series: string;
    url: string;
    limit: string;
    offset: string;
    total: string;
    DriverTable: {
      Drivers: Driver[];
    };
  };
};

export type GetDriversParams = {
  offset: number;
};
