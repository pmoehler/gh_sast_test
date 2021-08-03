function foo(req, res) {
  const tainted = req.query.name;

  res.send(tainted); // Noncompliant
}
