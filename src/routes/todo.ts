import * as express from 'express';
import * as _ from 'lodash';

const router = express.Router();
let todos = [{
  id: 1,
  title: 'Todo title',
  content: 'Todo content'
}];

router.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  return res.json({
    todos
  });
});
router.get('/:id', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const result = _.find(todos, {id: req.params.id});

  if(!result) return res.status(404).send('Not Found');
  return res.json(result);
});
router.post('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  return res.status(201).json({
    body: req.body
  });
});
router.put('/:id', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const id = req.params.id;
  return res.status(204).json({
    body: req.body
  });
});
router.delete('/:id', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const id = req.params.id;

  return res.status(204).json({
    body: req.body
  });
});

export default router;