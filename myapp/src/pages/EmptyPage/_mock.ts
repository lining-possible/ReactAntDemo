// eslint-disable-next-line import/no-extraneous-dependencies
import type { Request, Response } from 'express';
import Heros from './herolist.json'
// mock tableListDataSource



function getHeros(req: Request, res: Response) {
  console.log("eeeeeeeeeee")
  console.log(Heros)

  res.json(Heros)
}
function getSearchHeros(req: Request, res: Response) {
  console.log("getSearchHeros")
  console.log(req)
  if (req.body.hero) {
    let result = Heros.filter((item, i) => {
      return item.cname == req.body.hero;
    })
    res.json(result)
  } else {
    res.json('')
  }

}


export default {
  'GET /api/heros': getHeros,
  'POST /api/SearchHeros': getSearchHeros,
};
