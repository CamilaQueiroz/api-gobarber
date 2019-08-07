import User from '../models/User';
import Notification from '../schemas/Notification';

class NotificationController {
  async index(req, res) {
    const isProvider = await User.findOne({
      where: { id: req.userId, provider: true },
    });

    if (!isProvider) {
      return res
        .status(401)
        .json({ error: 'Only providers can load notifications' });
    }

    const notifications = await Notification.find({
      user: req.userId,
    })
      .sort({ createdAt: 'desc' })
      .limit(20);
    return res.json(notifications);
  }

  async update(req, res) {
    const notification = await Notification.findById(req.params.id);
    if (notification.user !== req.userId) {
      return res
        .status(401)
        .json({ error: 'You dont have permission to read this notification' });
    }

    const updatedNotification = await notification.update(
      { read: true },
      { new: true }
    );

    return res.json(updatedNotification);
  }
}

export default new NotificationController();
