interface IStatusCode {
  ERROR: number;
  NOT_FOUND: number;
  NO_CONTENT: number;
  SUCCESS: number;
  BAD_REQUEST: number;
  CONFLICT: number;
  UNAUTHORIZED: number;
}

const StatusCode: IStatusCode = {
  ERROR: 500, // 500
  NOT_FOUND: 404, // 404
  NO_CONTENT: 204, // 204
  SUCCESS: 200, // 200
  BAD_REQUEST: 400, // 400
  CONFLICT: 409, // conflict
  UNAUTHORIZED: 401, // 401
};

export default StatusCode;
