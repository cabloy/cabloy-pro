const http = require('http');
const compose = require('koa-compose');
const onFinished = require('on-finished');
const statuses = require('statuses');
const isJSON = require('koa-is-json');
const Stream = require('stream');

let __fnMiddleware;

/**
 * perform action of this or that module
 * @param  {string} options options
 * @param  {string} options.method method
 * @param  {string} options.url    url
 * @param  {json} options.body   body(optional)
 * @return {promise}                response.body.data or throw error
 */
module.exports = async function performAction({
  ctxCaller,
  innerAccess,
  subdomain,
  method,
  url,
  query,
  params,
  headers,
  body,
}) {
  // app
  const app = ctxCaller.app;
  // middleware
  if (!__fnMiddleware) {
    __fnMiddleware = compose(app.middleware);
  }
  // request
  url = app.meta.util.combineFetchPath(ctxCaller.module && ctxCaller.module.info, url);
  const req = createRequest({ method, url }, ctxCaller);
  // response
  const res = new http.ServerResponse(req);
  // default status code
  res.statusCode = 404;
  // ctx
  const ctx = app.createContext(req, res);
  onFinished(res, ctx.onerror);

  // subdomain
  ctx.subdomain = typeof subdomain === 'undefined' ? ctxCaller.subdomain : subdomain;

  // query params body
  if (query) {
    ctx.req.query = ctx.request.query = query;
  }
  if (params) {
    ctx.req.params = ctx.request.params = params;
  }
  ctx.req.body = ctx.request.body = body || null; // not undefined

  // headers
  if (headers) Object.assign(ctx.headers, headers);

  // multipart
  ctx.multipart = function (options) {
    return ctxCaller.multipart(options);
  };

  // cookies
  delegateCookies(ctx, ctxCaller);

  // session
  delegateSession(ctx, ctxCaller);

  // should not delegate session, because session._ctx related to ctx
  for (const property of ['state', 'socket']) {
    delegateProperty(ctx, ctxCaller, property);
  }

  // ctxCaller
  ctx.ctxCaller = ctxCaller;

  // innerAccess
  if (innerAccess !== undefined) ctx.innerAccess = innerAccess;

  try {
    // invoke middleware
    await __fnMiddleware(ctx);
    // session
    delegateSession(ctxCaller, ctx);
    // handle respond
    respond.call(ctx);
    // check result
    if (ctx.status === 200) {
      if (!ctx.body || ctx.body.code === undefined) {
        // not check code, e.g. text/xml
        return ctx.body;
      }
      if (ctx.body.code === 0) {
        return ctx.body.data;
      }
      const error = ctx.createError(ctx.body);
      throw error;
    } else {
      const error = ctx.createError({
        code: ctx.status,
        message: ctx.message || ctx.body,
      });
      throw error;
    }
  } catch (err) {
    const error = ctx.createError(err);
    ctx.onerror(error);
    throw error;
  }
};

function delegateCookies(ctx, ctxCaller) {
  const _cookies = ctx.cookies;
  Object.defineProperty(ctx, 'cookies', {
    get() {
      return ctxCaller.cookies || _cookies;
    },
  });
}

function delegateSession(ctxTo, ctxFrom) {
  Object.assign(ctxTo.session, ctxFrom.session.toJSON());
}

function delegateProperty(ctx, ctxCaller, property) {
  Object.defineProperty(ctx, property, {
    get() {
      return ctxCaller[property];
    },
  });
}

function createRequest({ method, url }, ctxCaller) {
  // _req
  const _req = ctxCaller.request;
  // req
  const req = new http.IncomingMessage();
  req.headers = _req.headers;
  req.host = _req.host;
  req.hostname = _req.hostname;
  req.protocol = _req.protocol;
  req.secure = _req.secure;
  req.method = method.toUpperCase();
  req.url = url;
  // path,
  req.socket = {
    remoteAddress: _req.socket.remoteAddress,
    remotePort: _req.socket.remotePort,
  };
  return req;
}

function respond() {
  // allow bypassing koa
  if (this.respond === false) return;

  const res = this.res;
  if (res.headersSent || !this.writable) return;

  let body = this.body;
  const code = this.status;

  // ignore body
  if (statuses.empty[code]) {
    // strip headers
    this.body = null;
    return res.end();
  }

  if (this.method === 'HEAD') {
    if (isJSON(body)) this.length = Buffer.byteLength(JSON.stringify(body));
    return res.end();
  }

  // status body
  if (body == null) {
    this.type = 'text';
    body = this.message || String(code);
    this.length = Buffer.byteLength(body);
    return res.end(body);
  }

  // responses
  if (Buffer.isBuffer(body)) return res.end(body);
  if (typeof body === 'string') return res.end(body);
  if (body instanceof Stream) return body.pipe(res);

  // body: json
  body = JSON.stringify(body);
  this.length = Buffer.byteLength(body);
  res.end(body);
}
