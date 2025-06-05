import baseService from "./base.service";

const urlService = {
  createShortUrl: (data) => baseService.post('/url', data),
};

export default urlService;