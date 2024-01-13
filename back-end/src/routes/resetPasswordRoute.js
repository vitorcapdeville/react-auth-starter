import bcrypt from 'bcrypt';
import { getDbConnection } from '../db.js';

export const resetPasswordRoute = {
  path: '/api/users/:passwordResetCode/reset-password',
  method: 'put',
  handler: async (req, res) => {
    const { passwordResetCode } = req.params;
    const { newPassword } = req.body;

    const db = getDbConnection('react-auth-db');
    const newHashedPassword = await bcrypt.hash(newPassword, 10);

    const result = await db.collection('users').updateOne(
      { passwordResetCode },
      {
        $set: { passwordHash: newHashedPassword },
        $unset: { passwordResetCode: '' }
      }
    );

    if (result.modifiedCount === 0) return res.sendStatus(404);

    res.sendStatus(200);
  }
}