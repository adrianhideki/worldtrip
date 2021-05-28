import { NextApiResponse, NextApiRequest } from "next";
import asia from '../../../data/asia';
import europe from '../../../data/europe';
import africa from '../../../data/africa';
import northAmerica from '../../../data/northAmerica';
import oceania from '../../../data/oceania';
import southAmerica from '../../../data/southAmerica';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    let result;

    switch(req.query.name) {
      case "asia": result = asia;
      break;
      case "africa": result = africa;
      break;
      case "europe": result = europe;
      break;
      case "north-america": result = northAmerica;
      break;
      case "oceania": result = oceania;
      break;
      case "south-america": result = southAmerica;
      break;
    }

    if (!result) {
      return res.status(404).end("Not found");
    }

    return res.status(200).json(result);
  } else {
    res.setHeader("Allow", "GET");
    res.status(405).end("Method not allowed");
  }
};
