import { Request, Response } from 'express';

class AuthController {
  authCallback(req: Request, res: Response) {
    res.send(
      `<script>window.opener.postMessage('${JSON.stringify(req.user)}', '*');window.close();</script>`
    );
  }
}

export default new AuthController();
