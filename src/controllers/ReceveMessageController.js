class ReceveMessageControlle {
  receveMessage(req, res) {
    console.log(req.body);
    return res.send(req.body);
  }
}

export default new ReceveMessageControlle();
