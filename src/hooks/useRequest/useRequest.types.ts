import { AxiosResponse } from 'axios';

export type UseRequestType = {
    response: null | AxiosResponse;
    error: null | Error;
    loading: boolean;
    refetch: () => void;
};
