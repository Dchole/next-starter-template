import { NextApiRequest, NextApiResponse } from "next";

interface IData {
  name: string;
}

export default (req: NextApiRequest, res: NextApiResponse<IData>) => {
  res.status(200).json({ name: "John Doe" });
};
