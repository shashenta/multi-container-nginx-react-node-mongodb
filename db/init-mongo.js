db.createUser(
  {
    user: "shashe",
    pwd: "doesitreallymatterwhatthisis",
    roles: [
      {
        role: "readWrite",
        db: "multicontainer-database"
      }
    ]
  }
)