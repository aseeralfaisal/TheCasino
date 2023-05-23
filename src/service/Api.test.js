import Api from './Api.service';

jest.mock('./Api.service');

describe('Api', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should create an instance of Axios with the correct base URL', () => {
        expect(Api.defaults.baseURL).toEqual(
            process.env.REACT_APP_BASE_URI || 'http://stage.whgstage.com/front-end-test/'
        );
    });

    it('should pass the request through the request interceptor', async () => {
        const requestData = { url: '/test', method: 'get' };
        const resolvedValue = { data: 'response' };
        Api.mockImplementationOnce(() => Promise.resolve(resolvedValue));

        const response = await Api(requestData);

        expect(Api).toHaveBeenCalledWith(requestData);
        expect(response).toEqual(resolvedValue);
    })
})
