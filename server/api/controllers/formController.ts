import { Request, Response } from 'express';
import { writeToFile, uuidv4 } from '../../utils/utils';

class FormController {
  public addNewUser(req: Request, res: Response) {
    const data = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber
    };

    writeToFile(data, `./public/${uuidv4()}.json`);

    res.status(201).send({
      sucess: "true",
      message: "data saved succesfully"
    });
  }

  public wrongRoute(req: Request, res: Response) {
    res.status(404).send({
      message: "Not Found"
    });
  }
}

export default FormController;
