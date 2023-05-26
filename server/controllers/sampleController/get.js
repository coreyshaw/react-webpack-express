module.exports = async (req, res) => {
  try {
    return res.status(200).json({
      status: 'success',
      message: 'test',
    });
  } catch (e) {
    return res.status(500).json({
      message: e.message,
    });
  }
};
