export const checkValidatData = (email, password, name) => {
  const isemailvalid = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
  const isPasswordvalid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

//   const isNamevalid = /^[a-zA-Z]+( [a-zA-Z]+)*$/.test(name);

//   if (!isNamevalid) return "Name is Not valid";
  if (!isemailvalid) return "Email Id is not valid";
  if (!isPasswordvalid)
    return "Password should contain uppercase and lowercase letters,it should contain letters and numbers. it should contain special characters";

  return null;
};


