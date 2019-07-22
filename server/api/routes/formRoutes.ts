import FormController from '../controllers/formController';

class Routes {
  public formController: FormController = new FormController();
  public routes(app): void {
    app.route('/')
      .get(this.formController.wrongRoute);

    app.route('/contact')
      .post(this.formController.addNewUser);
  }
}

export default Routes;
