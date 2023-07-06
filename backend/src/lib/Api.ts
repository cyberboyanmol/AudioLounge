import { Response } from 'express';
import { getConfig } from '../config';
import { logger } from './logger';
import { globalConstants } from './constants';
import { CustomResponse } from '../interfaces/response.interface';

abstract class Api {
  public send<R>(
    res: Response<CustomResponse<R>>,
    data: R,
    message = 'healthy',
    status: string = globalConstants.status.success,
    statusCode: number = globalConstants.statusCode.HttpsStatusCodeOk.code,
  ) {
    if (getConfig().env === 'development') {
      // need to change based on environment
      logger.info(JSON.stringify(data, null, 2));
    }

    return res.status(statusCode).json({
      status,
      message,
      data,
    });
  }
}

export default Api;
