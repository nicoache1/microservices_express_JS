import TransmitterController from '../networking/controllers/TransmitterController';

const appRouter = app => {
  app.post('/Card', async (req, res) => {
    try {
      const newCard = req.body;
      await TransmitterController.addNewCard(newCard);
      res.status(200).send('Add new card succesfully');
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

  app.post('/Transaction', async (req, res) => {
    try {
      const card = req.body;
      const response = await TransmitterController.validateCard(card);
      res.status(200).send(response);
    } catch (error) {
      console.log('LLEGUE');
      res.status(500).send(error.message);
    }
  });
};

export default appRouter;
