function Use(Usr, Usr_type) {
  const Usr_length = Usr.length;
  if (Usr_length >= 5 && Usr_length <= 10) {
    return "Username Valid, have a great day " + Usr + " !😃";
  }
  if (Urs_type === "Admin" || Usr_type === "Manager") {
    return "Username Valid, have a great day " + Usr + " !😃";
  } else {
    return "Username invalid. /n Try again";
  }
}

console.log(Use("Damian", "Admin"));
